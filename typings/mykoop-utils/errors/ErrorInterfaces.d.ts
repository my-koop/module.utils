import ErrorCodes = require("./ErrorCodes");
export interface ValidationErrorData {
    [id: string]: string[];
}
export interface SerializeResult {
    code: ErrorCodes;
    validation?: ValidationErrorData;
    app?: any;
    [id: string]: any;
}
