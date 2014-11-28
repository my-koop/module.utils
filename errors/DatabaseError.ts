import MyKoopError = require("./MyKoopError");
import ErrorInterfaces = require("./ErrorInterfaces");

class DatabaseError extends MyKoopError {
  constructor(
    err: Error,
    msg: string = "Database Error",
    ...args: any[]
  ) {
    super(err, msg, args);
    this.context = "database";
  }
}
export = DatabaseError;
