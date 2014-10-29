var BaseModule = (function () {
    function BaseModule() {
    }
    BaseModule.prototype.getModuleManager = function () {
        return this.moduleManager;
    };
    BaseModule.prototype.setModuleManager = function (moduleManager) {
        this.moduleManager = moduleManager;
    };
    return BaseModule;
})();
module.exports = BaseModule;
