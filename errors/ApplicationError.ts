import MyKoopError = require("./MyKoopError");
import ErrorInterfaces = require("./ErrorInterfaces");

class ApplicationError extends MyKoopError {
  // Child classes
  static ValidationError: any;
  static ResourceNotFoundError: any;
  static AccessDeniedError: any;

  constructor(
    err: Error,
    public errData: any = {},
    msg: string = "Application Error",
    ...args: any[]
  ) {
    super(err, msg, args);
    this.statusCode = 400;
    this.context = "application";
  }

  serialize(): ErrorInterfaces.SerializeResult {
    return {
      context: this.context,
      app: this.errData
    };
  }
}

export = ApplicationError;
