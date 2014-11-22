/// <reference path="../typings/tsd.d.ts" />
import MyKoopError = require("./MyKoopError");
import DatabaseError = require("./DatabaseError");
import ApplicationError = require("./ApplicationError");
MyKoopError.DatabaseError = DatabaseError;
MyKoopError.ApplicationError = ApplicationError;

// ValidationError is now an ApplicationError, it should be taken from its parent
import ValidationError = require("./ValidationError");
var logger = require("mykoop-logger")(module);
(<any>MyKoopError).__defineGetter__("ValidationError", function() {
  logger.warn("DEPRECATED:: MyKoopError.ValidationError is no longer supported,\
 please use MyKoopError.ApplicationError.ValidationError");
  return ValidationError;
});

export = MyKoopError;
