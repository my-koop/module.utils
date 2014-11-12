var _ = require("lodash");

var ModuleControllersBinder = (function () {
    function ModuleControllersBinder(moduleInstance) {
        this.moduleInstance = moduleInstance;
        var moduleManager = this.moduleInstance.getModuleManager();
        this.routerModule = (moduleManager.get("router"));
    }
    ModuleControllersBinder.prototype.attach = function (params, controller) {
        this.routerModule.addRoute(params, controller.bind(this.moduleInstance));
    };

    ModuleControllersBinder.prototype.makeSimpleController = function (method, options) {
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
            this[method](params, function (err, response) {
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
