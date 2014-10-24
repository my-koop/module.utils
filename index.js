/// <reference path="typings/tsd.d.ts" />
var MetaData = require("./lib/metaData");
exports.MetaData = MetaData;

var env = process.env;
var TEST_ENV = env.TEST_ENV;
var NODE_ENV = env.NODE_ENV || "development";

// In development.
exports.__DEV__ = (NODE_ENV === "development");

// In production.
exports.__PROD__ = (NODE_ENV === "production");
