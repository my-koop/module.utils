import ApplicationError = require("./ApplicationError");
import ErrorInterfaces = require("./ErrorInterfaces");

class ResourceNotFoundError extends ApplicationError {
  constructor(
    err: Error,
    data: any,
    msg: string = "Resource Not Found Error",
    ...args: any[]
  ) {
    super(err, data, msg, args);
    this.statusCode = 404;
    this.context = "notFound";
  }
}
export = ResourceNotFoundError;
