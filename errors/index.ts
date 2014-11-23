/// <reference path="../typings/tsd.d.ts" />
import MyKoopError = require("./MyKoopError");
import DatabaseError = require("./DatabaseError");
import ApplicationError = require("./ApplicationError");
MyKoopError.DatabaseError = DatabaseError;
MyKoopError.ApplicationError = ApplicationError;

import ValidationError = require("./ValidationError");
import ResourceNotFoundError = require("./ResourceNotFoundError");
import AccessDeniedError = require("./AccessDeniedError");
ApplicationError.ResourceNotFoundError = ResourceNotFoundError;
ApplicationError.AccessDeniedError = AccessDeniedError;
ApplicationError.ValidationError = ValidationError;

export = MyKoopError;
