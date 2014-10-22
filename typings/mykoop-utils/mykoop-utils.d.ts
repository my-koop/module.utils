
declare module "mykoop-utils" {

  export interface RouteMetaData{
    idPath: string[];
    path?: string;
    name?: string;
    component: string;
    default?: string;
  }

  export class MetaData {
    addData(path: string[], data: any): void;
    addData(path: string, data: any): void;
    get(): any;
    addRoute(options: RouteMetaData);
  }
}
