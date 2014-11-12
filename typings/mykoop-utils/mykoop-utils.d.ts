/// <reference path="errors/MyKoopError.d.ts" />

declare module mklogger {
  export interface Logger {}
}

declare module "mykoop-utils/common" {
  export function validation(obj: any, constraint, options?: any);
  module validation {
    export function addValidator(
      validatorName: string,
      validationFunction: (value, options?: any, key?: string, attributes?: any) => string
    );
  }
}

declare module "mykoop-utils" {

  export var __DEV__: boolean;
  export var __PROD__: boolean;
  export function getLogger(module: any): mklogger.Logger;
  export class errors extends MyKoopError{}

  export class BaseModule implements mykoop.IModule {
    getModuleManager(): mykoop.ModuleManager;
    setModuleManager(moduleManager: mykoop.ModuleManager): void;
  }

  export class ModuleControllersBinder<T extends mykoop.IModule> {
    constructor(moduleInstance: T);
    attach(
      params: mykoop.RouteParams,
      controller: Express.Handler
    );
    attach(
      params: mykoop.RouteParams,
      controller: Express.Handler[]
    );
    makeSimpleController(
      method: string,
      parseFunc?: (req: Express.Request) => any
    ): (req: Express.Request, res: Express.Response) => void;
    makeSimpleController(
      method: string,
      options?: {
        parseFunc?: (req: Express.Request) => any
        processResponse?: (response: any) => any;
      }
    ): (req: Express.Request, res: Express.Response) => void;
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

  export class MetaDataBuilder {
    // Retrieves the MetaData object
    get(): any;
    // Adds data to the MetaData, must at least provide the root in path
    addData(path: string[], data: any): void;
    addData(path: string, data: any): void;
    // Adds a frontend route to the MetaData, refer to RouteMetaData for options
    addFrontendRoute(options: RouteMetaData);
  }
}
