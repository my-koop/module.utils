import verror = require("verror");
import ErrorCodes = require("./ErrorCodes");
import DatabaseError = require("./DatabaseError");
import ApplicationError = require("./ApplicationError");
import ValidationError = require("./ValidationError");
import ErrorInterfaces = require("./ErrorInterfaces");

class MyKoopError extends verror.WError {
  static DatabaseError = DatabaseError;
  static ApplicationError = ApplicationError;
  static ValidationError = ValidationError;

  constructor(err: Error, msg: string, ...args: any[]) {
    super(err, msg, args);
  }

  serialize(): ErrorInterfaces.SerializeResult {
    return {
      code: ErrorCodes.codes.Unknown
    };
  }
}

export = MyKoopError;
