import MyKoopError = require("./MyKoopError");
import ErrorInterfaces = require("./ErrorInterfaces");

class ApplicationError extends MyKoopError {
  constructor(
    err: Error,
    public errData: any,
    msg: string, ...args: any[]
  ) {
    super(err, msg, args);
  }

  serialize(): ErrorInterfaces.SerializeResult {
    return {
      context: "application",
      app: this.errData
    };
  }
}

export = ApplicationError;
