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
export class MetaData extends MetaDataBuilder {
  constructor() {
    logger.warn(
      "MetaData is deprecated, use MetaDataBuilder instead",
      {
        stack:new Error().stack
      }
    );
    super();
  }
};
export import ModuleControllersBinder = require("./lib/ModuleControllersBinder");
export import BaseModule = require("./lib/BaseModule");

// FIXME:: Test cases, pending real test infrastructure
// this imports the file to trigger typescript compilation
// but doesn't generate any code
import t1 = require("./tests/metaDataTests");

