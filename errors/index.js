/// <reference path="../typings/tsd.d.ts" />
var MyKoopError = require("./MyKoopError");
var DatabaseError = require("./DatabaseError");
var ApplicationError = require("./ApplicationError");
MyKoopError.DatabaseError = DatabaseError;
MyKoopError.ApplicationError = ApplicationError;
// ValidationError is now an ApplicationError, it should be taken from its parent
var ValidationError = require("./ValidationError");
var logger = require("mykoop-logger")(module);
MyKoopError.__defineGetter__("ValidationError", function () {
    logger.warn("DEPRECATED:: MyKoopError.ValidationError is no longer supported,\
 please use MyKoopError.ApplicationError.ValidationError");
    return ValidationError;
});
module.exports = MyKoopError;
