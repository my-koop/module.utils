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
        if (typeof errData === "undefined") { errData = {}; }
        if (typeof msg === "undefined") { msg = "Application Error"; }
        var args = [];
        for (var _i = 0; _i < (arguments.length - 3); _i++) {
            args[_i] = arguments[_i + 3];
        }
        _super.call(this, err, msg, args);
        this.errData = errData;
        this.statusCode = 400;
    }
    ApplicationError.prototype.serialize = function () {
        return {
            context: "application",
            app: this.errData
        };
    };
    return ApplicationError;
})(MyKoopError);

module.exports = ApplicationError;
