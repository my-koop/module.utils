import MyKoopError = require("./MyKoopError");
import ErrorInterfaces = require("./ErrorInterfaces");
declare class ValidationError extends MyKoopError {
    public validationErrorData: ErrorInterfaces.ValidationErrorData;
    constructor(validationErrorData: ErrorInterfaces.ValidationErrorData, err: Error, msg: string, ...args: any[]);
    public serialize(): ErrorInterfaces.SerializeResult;
}
export = ValidationError;
