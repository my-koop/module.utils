var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var verror = require("verror");
var ErrorCodes = require("./ErrorCodes");
var DatabaseError = require("./DatabaseError");
var ApplicationError = require("./ApplicationError");
var ValidationError = require("./ValidationError");
var ErrorInterfaces = require("./ErrorInterfaces");

var MyKoopError = (function (_super) {
    __extends(MyKoopError, _super);
    function MyKoopError(err, msg) {
        var args = [];
        for (var _i = 0; _i < (arguments.length - 2); _i++) {
            args[_i] = arguments[_i + 2];
        }
        _super.call(this, err, msg, args);
    }
    MyKoopError.prototype.serialize = function () {
        return {
            code: 0 /* Unknown */
        };
    };
    MyKoopError.DatabaseError = DatabaseError;
    MyKoopError.ApplicationError = ApplicationError;
    MyKoopError.ValidationError = ValidationError;
    MyKoopError.ErrorInterfaces = ErrorInterfaces;
    return MyKoopError;
})(verror.WError);

module.exports = MyKoopError;
