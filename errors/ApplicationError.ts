import MyKoopError = require("./MyKoopError");
import ErrorCodes = require("./ErrorCodes");
import ErrorInterfaces = require("./ErrorInterfaces");

class ApplicationError extends MyKoopError {
  constructor(public errData: any, err: Error, msg: string, ...args: any[]) {
    super(err, msg, args);
  }

  serialize(): ErrorInterfaces.SerializeResult {
    return {
      code: ErrorCodes.codes.Application,
      app: this.errData
    };
  }
}

export = ApplicationError;
