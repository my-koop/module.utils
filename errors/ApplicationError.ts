import MyKoopError = require("./MyKoopError");
import ErrorInterfaces = require("./ErrorInterfaces");

class ApplicationError extends MyKoopError {
  // Child classes
  static ValidationError: any;
  static ResourceNotFoundError: any;

  constructor(
    err: Error,
    public errData: any = {},
    msg: string = "Application Error",
    ...args: any[]
  ) {
    super(err, msg, args);
    this.statusCode = 400;
  }

  serialize(): ErrorInterfaces.SerializeResult {
    return {
      context: "application",
      app: this.errData
    };
  }
}

export = ApplicationError;
