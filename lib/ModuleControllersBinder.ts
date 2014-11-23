import _ = require("lodash");
import Express = require("express");
import getLogger = require("mykoop-logger");
import MyKoopError = require("../errors/MyKoopError");
var logger = getLogger(module);

class ModuleControllersBinder<T extends mykoop.IModule> {
  moduleInstance: T;
  private routerModule: mykoop.Router;

  constructor(moduleInstance: T) {
    this.moduleInstance = moduleInstance;
    var moduleManager = this.moduleInstance.getModuleManager();
    this.routerModule = <mykoop.Router>(moduleManager.get("router"));
  }

  attach(
    params: mykoop.RouteParams,
    controllers: Express.Handler[]
  ) {
    if(_.isFunction(controllers)) {
      controllers = [<any>controllers];
    }
    var self = this;
    controllers = _.map(controllers, function(controller) {
      return _.bind(controller, self.moduleInstance);
    });
    this.routerModule.addRoute(params, controllers);
  }

  makeSimpleController(
    methodName: string,
    options?: {
      parseFunc?: (req: Express.Request) => any;
      processResponse?: (response: any) => any;
    }
  ) {
    var method;
    if(_.isFunction(methodName)) {
      method = _.bind(<any>methodName, this.moduleInstance);
    } else {
      if(!_.isFunction(this.moduleInstance[methodName])) {
        logger.warn("Method [%s] doesn't exist");
        return function(req, res) {
          res.error(new MyKoopError(null, "Invalid controller handler"));
        }
      }
      method = _.bind(this.moduleInstance[methodName], this.moduleInstance);
    }

    if(_.isFunction(options)) {
      options = {
        parseFunc: <any>options
      };
    }
    if(!options) {
      options = {};
    }
    var parseFunc = options.parseFunc || function() { return {}; };
    var processResponse = options.processResponse || _.identity;

    return function(req, res) {
      var params = parseFunc(req);
      method(params, function(err, response) {
        if(err) {
          return res.error(err);
        }
        res.send(processResponse(response));
      });
    }
  }
}

export = ModuleControllersBinder;

