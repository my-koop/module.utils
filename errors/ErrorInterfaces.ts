import ErrorCodes = require("./ErrorCodes");

export interface ValidationErrorData {
  [id: string]: string[];
}

export interface SerializeResult {
  code: ErrorCodes.codes;
  validation?: ValidationErrorData;
  app?: any;
  [id: string]: any;
}
