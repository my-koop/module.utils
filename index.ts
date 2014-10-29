/// <reference path="typings/tsd.d.ts" />
export import MetaData = require("./lib/metaData");
export import ModuleControllersBinder = require("./lib/ModuleControllersBinder");
export import BaseModule = require("./lib/BaseModule");

var env = process.env;
var TEST_ENV = env.TEST_ENV;
var NODE_ENV = env.NODE_ENV || "development";

// In development.
export var __DEV__ = (NODE_ENV === "development");

// In production.
export var __PROD__ = (NODE_ENV === "production");

// FIXME:: Test cases, pending real test infrastructure
// this imports the file to trigger typescript compilation
// but doesn't generate any code
import t1 = require("./tests/metaDataTests");

