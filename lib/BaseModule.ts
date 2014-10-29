class BaseModule implements mykoop.IModule {
  moduleManager: mykoop.ModuleManager;

  getModuleManager(): mykoop.ModuleManager {
    return this.moduleManager;
  }
  setModuleManager(moduleManager: mykoop.ModuleManager): void {
    this.moduleManager = moduleManager;
  }
}
export = BaseModule;
