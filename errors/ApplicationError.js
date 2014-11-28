var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MyKoopError = require("./MyKoopError");
var ApplicationError = (function (_super) {
    __extends(ApplicationError, _super);
    function ApplicationError(err, errData, msg) {
        if (errData === void 0) { errData = {}; }
        if (msg === void 0) { msg = "Application Error"; }
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        _super.call(this, err, msg, args);
        this.errData = errData;
        this.statusCode = 400;
        this.context = "application";
    }
    ApplicationError.prototype.serialize = function () {
        return {
            context: this.context,
            app: this.errData
        };
    };
    return ApplicationError;
})(MyKoopError);
module.exports = ApplicationError;
