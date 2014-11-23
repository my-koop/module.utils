var _ = require("lodash");
var getLogger = require("mykoop-logger");
var MyKoopError = require("../errors/MyKoopError");
var logger = getLogger(module);
var ModuleControllersBinder = (function () {
    function ModuleControllersBinder(moduleInstance) {
        this.moduleInstance = moduleInstance;
        var moduleManager = this.moduleInstance.getModuleManager();
        this.routerModule = (moduleManager.get("router"));
    }
    ModuleControllersBinder.prototype.attach = function (params, controllers) {
        if (_.isFunction(controllers)) {
            controllers = [controllers];
        }
        var self = this;
        controllers = _.map(controllers, function (controller) {
            return _.bind(controller, self.moduleInstance);
        });
        this.routerModule.addRoute(params, controllers);
    };
    ModuleControllersBinder.prototype.makeSimpleController = function (methodName, options) {
        var method;
        if (_.isFunction(methodName)) {
            method = _.bind(methodName, this.moduleInstance);
        }
        else {
            if (!_.isFunction(this.moduleInstance[methodName])) {
                logger.warn("Method [%s] doesn't exist");
                return function (req, res) {
                    res.error(new MyKoopError(null, "Invalid controller handler"));
                };
            }
            method = _.bind(this.moduleInstance[methodName], this.moduleInstance);
        }
        if (_.isFunction(options)) {
            options = {
                parseFunc: options
            };
        }
        if (!options) {
            options = {};
        }
        var parseFunc = options.parseFunc || function () {
            return {};
        };
        var processResponse = options.processResponse || _.identity;
        return function (req, res) {
            var params = parseFunc(req);
            method(params, function (err, response) {
                if (err) {
                    return res.error(err);
                }
                res.send(processResponse(response));
            });
        };
    };
    return ModuleControllersBinder;
})();
module.exports = ModuleControllersBinder;
