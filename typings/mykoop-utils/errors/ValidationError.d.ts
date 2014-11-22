/// <reference path="./ErrorInterfaces.d.ts" />
/// <reference path="./ApplicationError.d.ts" />
declare class ValidationError extends ApplicationError {
    validationErrorData: ErrorInterfaces.ValidationErrorData;
    constructor(err: Error, validationErrorData: ErrorInterfaces.ValidationErrorData, msg?: string, ...args: any[]);
}
