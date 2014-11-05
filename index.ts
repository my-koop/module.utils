/// <reference path="typings/tsd.d.ts" />
var env = process.env;
var TEST_ENV = env.TEST_ENV;
var NODE_ENV = env.NODE_ENV || "development";

// In development.
export var __DEV__ = (NODE_ENV === "development");
// In production.
export var __PROD__ = (NODE_ENV === "production");

export import getLogger = require("mykoop-logger");
var logger = getLogger(module);

export import MetaDataBuilder = require("./lib/MetaDataBuilder");
export import ModuleControllersBinder = require("./lib/ModuleControllersBinder");
export import BaseModule = require("./lib/BaseModule");
export import common = require("./common/index");
export import errors = require("./errors/index");

// FIXME:: Test cases, pending real test infrastructure
// this imports the file to trigger typescript compilation
// but doesn't generate any code
import t1 = require("./tests/metaDataTests");
import t2 = require("./tests/errorsTests");

