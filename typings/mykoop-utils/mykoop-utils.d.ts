
declare module "mykoop-utils" {

  export interface RouteMetaData{
    parents: string[];
    path?: string;
    name?: string;
    component?: string;
    isDefault?: boolean;
  }

  export interface IMetaData {
  }

  export var metaData: IMetaData;

}
