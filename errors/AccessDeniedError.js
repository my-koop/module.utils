var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ApplicationError = require("./ApplicationError");
var AccessDeniedError = (function (_super) {
    __extends(AccessDeniedError, _super);
    function AccessDeniedError(err, data, msg) {
        if (msg === void 0) { msg = "Access Denied Error"; }
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        _super.call(this, err, data, msg, args);
        this.statusCode = 403;
        this.context = "denied";
    }
    AccessDeniedError.prototype.serialize = function () {
        return {
            context: this.context,
            denied: this.errData
        };
    };
    return AccessDeniedError;
})(ApplicationError);
module.exports = AccessDeniedError;
