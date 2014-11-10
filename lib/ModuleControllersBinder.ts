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
    parseFunc: (req: Express.Request) => any
  ) {
    var moduleMethod = this.moduleInstance[method];
    return function(req, res) {
      var params = parseFunc(req);
      moduleMethod(params, function(err, response) {
        if(err) {
          res.error(err);
        }
        res.send(response);
      });
    }
  }
}

export = ModuleControllersBinder;

