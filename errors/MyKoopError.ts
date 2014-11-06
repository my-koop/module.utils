import verror = require("verror");
import ErrorInterfaces = require("./ErrorInterfaces");

class MyKoopError extends verror.WError {
  static DatabaseError: any;
  static ApplicationError: any;
  static ValidationError: any;

  constructor(err: Error, msg: string, ...args: any[]) {
    super(err, msg, args);
  }

  serialize(): ErrorInterfaces.SerializeResult {
    return {
      context: "unknown"
    };
  }
}

export = MyKoopError;
