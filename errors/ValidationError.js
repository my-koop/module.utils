var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MyKoopError = require("./MyKoopError");
var ValidationError = (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(err, validationErrorData, msg) {
        if (msg === void 0) { msg = "Validation Error"; }
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        _super.call(this, err, msg, args);
        this.validationErrorData = validationErrorData;
        this.statusCode = 400;
    }
    ValidationError.prototype.serialize = function () {
        return {
            context: "validation",
            validation: this.validationErrorData
        };
    };
    return ValidationError;
})(MyKoopError);
module.exports = ValidationError;
