var ModuleControllersBinder = (function () {
    function ModuleControllersBinder(moduleInstance) {
        this.moduleInstance = moduleInstance;
        var moduleManager = this.moduleInstance.getModuleManager();
        this.routerModule = (moduleManager.get("router"));
    }
    ModuleControllersBinder.prototype.attach = function (params, controller) {
        this.routerModule.addRoute(params, controller.bind(this.moduleInstance));
    };

    ModuleControllersBinder.prototype.makeSimpleController = function (method, parseFunc) {
        var moduleMethod = this.moduleInstance[method];
        return function (req, res) {
            var params = parseFunc(req);
            moduleMethod(params, function (err, response) {
                if (err) {
                    res.error(err);
                }
                res.send(response);
            });
        };
    };
    return ModuleControllersBinder;
})();

module.exports = ModuleControllersBinder;
