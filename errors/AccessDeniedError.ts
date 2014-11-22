import ApplicationError = require("./ApplicationError");
import ErrorInterfaces = require("./ErrorInterfaces");

class AccessDeniedError extends ApplicationError {
  constructor(
    err: Error,
    data: any,
    msg: string = "Access Denied Error",
    ...args: any[]
  ) {
    super(err, data, msg, args);
    this.statusCode = 403;
  }
}

export = AccessDeniedError;
