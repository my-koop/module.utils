var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ApplicationError = require("./ApplicationError");
var ValidationError = (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(err, validationErrorData, msg) {
        if (msg === void 0) { msg = "Validation Error"; }
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        _super.call(this, err, validationErrorData, msg, args);
        this.validationErrorData = validationErrorData;
        this.statusCode = 400;
        this.context = "validation";
    }
    ValidationError.prototype.serialize = function () {
        var serialize = _super.prototype.serialize.call(this);
        // FIXME:: This is to support backward compatibility
        serialize.validation = this.validationErrorData;
        return serialize;
    };
    return ValidationError;
})(ApplicationError);
module.exports = ValidationError;
