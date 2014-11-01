import MyKoopError = require("./MyKoopError");
import ErrorCodes = require("./ErrorCodes");
import ErrorInterfaces = require("./ErrorInterfaces");

class DatabaseError extends MyKoopError {
  constructor(err: Error, msg: string, ...args: any[]) {
    super(err, msg, args);
  }

  serialize(): ErrorInterfaces.SerializeResult {
    return {
      code: ErrorCodes.Database
    };
  }
}
export = DatabaseError;
