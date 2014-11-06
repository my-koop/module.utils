import MyKoopError = require("./MyKoopError");
import ErrorInterfaces = require("./ErrorInterfaces");

class ValidationError extends MyKoopError {
  constructor(
    err: Error,
    public validationErrorData: ErrorInterfaces.ValidationErrorData,
    msg: string = "Validation Error",
    ...args: any[]
  ) {
    super(err, msg, args);
  }

  serialize(): ErrorInterfaces.SerializeResult {
    return {
      context: "validation",
      validation: this.validationErrorData
    };
  }
}
export = ValidationError;
