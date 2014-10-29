/// <reference path="typings/tsd.d.ts" />
var MetaData = require("./lib/metaData");
exports.MetaData = MetaData;
var ModuleControllersBinder = require("./lib/ModuleControllersBinder");
exports.ModuleControllersBinder = ModuleControllersBinder;
var BaseModule = require("./lib/BaseModule");
exports.BaseModule = BaseModule;

var env = process.env;
var TEST_ENV = env.TEST_ENV;
var NODE_ENV = env.NODE_ENV || "development";

// In development.
exports.__DEV__ = (NODE_ENV === "development");

// In production.
exports.__PROD__ = (NODE_ENV === "production");
