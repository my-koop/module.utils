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
      req: express.Request,
      res: express.Response,
      next?: Function
    ) => void
  ) {
    this.routerModule.addRoute(params, controller.bind(this.moduleInstance));
  }
}

export = ModuleControllersBinder;

