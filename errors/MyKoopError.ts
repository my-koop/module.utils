import verror = require("verror");
import ErrorInterfaces = require("./ErrorInterfaces");

class MyKoopError extends verror.WError {
  static DatabaseError: any;
  static ApplicationError: any;
  statusCode: number;
  context = "unknown";

  constructor(
    err: Error,
    msg: string = "My Koop Error",
    ...args: any[]
  ) {
    super(err, msg, args);
    this.statusCode = 500;
  }

  serialize(): ErrorInterfaces.SerializeResult {
    return {
      context: this.context
    };
  }
}

export = MyKoopError;
