import MyKoopError = require("./MyKoopError");
import ErrorCodes = require("./ErrorCodes");
import ErrorInterfaces = require("./ErrorInterfaces");

class ValidationError extends MyKoopError {
  constructor(
    public validationErrorData: ErrorInterfaces.ValidationErrorData,
    err: Error,
    msg: string,
    ...args: any[]
  ) {
    super(err, msg, args);
  }

  serialize(): ErrorInterfaces.SerializeResult {
    return {
      code: ErrorCodes.codes.Validation,
      validation: this.validationErrorData
    };
  }
}
export = ValidationError;
