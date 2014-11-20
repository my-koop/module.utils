/// <reference path="typings/tsd.d.ts" />
var env = process.env;
var TEST_ENV = env.TEST_ENV;
var NODE_ENV = env.NODE_ENV || "development";
// In development.
exports.__DEV__ = (NODE_ENV === "development");
// In production.
exports.__PROD__ = (NODE_ENV === "production");
exports.getLogger = require("mykoop-logger");
var logger = exports.getLogger(module);
exports.MetaDataBuilder = require("./lib/MetaDataBuilder");
exports.ModuleControllersBinder = require("./lib/ModuleControllersBinder");
exports.BaseModule = require("./lib/BaseModule");
exports.MySqlHelper = require("./lib/MySqlHelper");
exports.common = require("./common/index");
exports.errors = require("./errors/index");
