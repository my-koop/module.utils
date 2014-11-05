/// <reference path="./ErrorCodes.d.ts" />

declare module ErrorInterfaces {
  export interface ValidationErrorData {
      [id: string]: string[];
  }
  export interface SerializeResult {
      context: string;
      validation?: ValidationErrorData;
      app?: any;
      [id: string]: any;
  }
}
