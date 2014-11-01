import MyKoopError = require("./MyKoopError");
import ErrorCodes = require("./ErrorCodes");
import ErrorInterfaces = require("./ErrorInterfaces");

class AplicationError extends MyKoopError {
  constructor(public errData: any, err: Error, msg: string, ...args: any[]) {
    super(err, msg, args);
  }

  serialize(): ErrorInterfaces.SerializeResult {
    return {
      code: ErrorCodes.Application,
      app: this.errData
    };
  }
}

export = AplicationError;
