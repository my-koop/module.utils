import ApplicationError = require("./ApplicationError");
import ErrorInterfaces = require("./ErrorInterfaces");

class ValidationError extends ApplicationError {
  constructor(
    err: Error,
    public validationErrorData: any,
    msg: string = "Validation Error",
    ...args: any[]
  ) {
    super(err, validationErrorData, msg, args);
    this.statusCode = 400;
    this.context = "validation";
  }

  serialize(): ErrorInterfaces.SerializeResult {
    var serialize = super.serialize();
    // FIXME:: This is to support backward compatibility
    serialize.validation = this.validationErrorData;
    return serialize;
  }
}
export = ValidationError;
