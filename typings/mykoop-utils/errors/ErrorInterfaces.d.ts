/// <reference path="./ErrorCodes.d.ts" />

declare module ErrorInterfaces {
  export interface ValidationErrorData {
      [id: string]: string[];
  }
  export interface SerializeResult {
      code: ErrorCodes.codes;
      validation?: ValidationErrorData;
      app?: any;
      [id: string]: any;
  }
}
