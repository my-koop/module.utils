import ApplicationError = require("./ApplicationError");
import ErrorInterfaces = require("./ErrorInterfaces");

class RessourceNotFoundError extends ApplicationError {
  constructor(
    err: Error,
    data: any,
    msg: string = "Ressource Not Found Error",
    ...args: any[]
  ) {
    super(err, data, msg, args);
    this.statusCode = 404;
  }
}
export = RessourceNotFoundError;
