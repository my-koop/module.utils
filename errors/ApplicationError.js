var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MyKoopError = require("./MyKoopError");
var ErrorCodes = require("./ErrorCodes");

var ApplicationError = (function (_super) {
    __extends(ApplicationError, _super);
    function ApplicationError(errData, err, msg) {
        var args = [];
        for (var _i = 0; _i < (arguments.length - 3); _i++) {
            args[_i] = arguments[_i + 3];
        }
        _super.call(this, err, msg, args);
        this.errData = errData;
    }
    ApplicationError.prototype.serialize = function () {
        return {
            code: 2 /* Application */,
            app: this.errData
        };
    };
    return ApplicationError;
})(MyKoopError);

module.exports = ApplicationError;
