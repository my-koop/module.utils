import _ = require("lodash");

class ModuleControllersBinder<T extends mykoop.IModule> {
  private moduleInstance: T;
  private routerModule: mykoop.Router;

  constructor(moduleInstance: T) {
    this.moduleInstance = moduleInstance;
    var moduleManager = this.moduleInstance.getModuleManager();
    this.routerModule = <mykoop.Router>(moduleManager.get("router"));
  }

  attach(
    params: mykoop.RouteParams,
    controller: (
      req: Express.Request,
      res: Express.Response,
      next?: Function
    ) => void
  ) {
    this.routerModule.addRoute(params, controller.bind(this.moduleInstance));
  }

  makeSimpleController(
    method: string,
    options?: {
      parseFunc?: (req: Express.Request) => any;
      processResponse?: (response: any) => any;
    }
  ) {
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
      this[method](params, function(err, response) {
        if(err) {
          return res.error(err);
        }
        res.send(processResponse(response));
      });
    }
  }
}

export = ModuleControllersBinder;

