
declare module mklogger {
  export interface Logger {}
}

declare module "mykoop-utils" {
  export var __DEV__: boolean;
  export var __PROD__: boolean;
  export function getLogger(module: any): mklogger.Logger;

  export class BaseModule implements mykoop.IModule {
    getModuleManager(): mykoop.ModuleManager;
    setModuleManager(moduleManager: mykoop.ModuleManager): void;
  }

  export class ModuleControllersBinder<T extends mykoop.IModule> {
    constructor(moduleInstance: T);
    attach(
      params: mykoop.RouteParams,
      controller: (
        req: express.Request,
        res: express.Response,
        next?: Function
      ) => void
    );
  }

  export interface RouteMetaData {
    // path of the route, mustn't be empty
    // ie: ["admin","inventory","description"]
    // where description is the handler you want to add
    idPath: string[];
    // Path to reach this handler in browser, can be relative or absolute
    path?: string;
    // Name of the route for <Link to="...">, set to null to use last idPath element
    name?: string;
    // Component you want to use for this route, the module must own the component
    // Wrapper component default is set
    // Wrapper components have {this.props.activeRouteHandler()}
    component: string;
    // same as component but used when this route has wrapper component
    default?: string;
  }

  //DEPRECATED
  export class MetaData extends MetaDataBuilder {}
  export class MetaDataBuilder {
    // Retrieves the MetaData object
    get(): any;
    // Adds data to the MetaData, must at least provide the root in path
    addData(path: string[], data: any): void;
    addData(path: string, data: any): void;
    // Adds a frontend route to the MetaData, refer to RouteMetaData for options
    addFrontendRoute(options: RouteMetaData);
    // Deprecated
    addRoute(options: RouteMetaData);
  }
}
