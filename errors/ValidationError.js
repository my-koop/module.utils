var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MyKoopError = require("./MyKoopError");
var ErrorCodes = require("./ErrorCodes");

var ValidationError = (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(validationErrorData, err, msg) {
        var args = [];
        for (var _i = 0; _i < (arguments.length - 3); _i++) {
            args[_i] = arguments[_i + 3];
        }
        _super.call(this, err, msg, args);
        this.validationErrorData = validationErrorData;
    }
    ValidationError.prototype.serialize = function () {
        return {
            code: 3 /* Validation */,
            validation: this.validationErrorData
        };
    };
    return ValidationError;
})(MyKoopError);
module.exports = ValidationError;