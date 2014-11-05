var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="typings/tsd.d.ts" />
var env = process.env;
var TEST_ENV = env.TEST_ENV;
var NODE_ENV = env.NODE_ENV || "development";

// In development.
exports.__DEV__ = (NODE_ENV === "development");

// In production.
exports.__PROD__ = (NODE_ENV === "production");

var getLogger = require("mykoop-logger");
exports.getLogger = getLogger;
var logger = exports.getLogger(module);

var MetaDataBuilder = require("./lib/MetaDataBuilder");
exports.MetaDataBuilder = MetaDataBuilder;
var MetaData = (function (_super) {
    __extends(MetaData, _super);
    function MetaData() {
        logger.warn("MetaData is deprecated, use MetaDataBuilder instead", {
            stack: new Error().stack
        });
        _super.call(this);
    }
    return MetaData;
})(exports.MetaDataBuilder);
exports.MetaData = MetaData;
;
var ModuleControllersBinder = require("./lib/ModuleControllersBinder");
exports.ModuleControllersBinder = ModuleControllersBinder;
var BaseModule = require("./lib/BaseModule");
exports.BaseModule = BaseModule;

var errors = require("./errors/index");
exports.errors = errors;
