var ModuleControllersBinder = (function () {
    function ModuleControllersBinder(moduleInstance) {
        this.moduleInstance = moduleInstance;
        var moduleManager = this.moduleInstance.getModuleManager();
        this.routerModule = (moduleManager.get("router"));
    }
    ModuleControllersBinder.prototype.attach = function (params, controller) {
        this.routerModule.addRoute(params, controller.bind(this.moduleInstance));
    };
    return ModuleControllersBinder;
})();

module.exports = ModuleControllersBinder;
