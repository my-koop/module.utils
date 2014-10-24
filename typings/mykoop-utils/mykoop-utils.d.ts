
declare module "mykoop-utils" {
  export var __DEV__: boolean;
  export var __PROD__: boolean;

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
    component: string;
    // same as component but used when this route has wrapper component
    default?: string;
  }

  export class MetaData {
    // Retrieves the MetaData object
    get(): any;
    // Adds data to the MetaData, must at least provide the root in path
    addData(path: string[], data: any): void;
    addData(path: string, data: any): void;
    // Adds a frontend route to the MetaData, refer to RouteMetaData for options
    addRoute(options: RouteMetaData);
  }
}
