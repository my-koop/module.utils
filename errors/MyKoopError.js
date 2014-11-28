var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var verror = require("verror");
var MyKoopError = (function (_super) {
    __extends(MyKoopError, _super);
    function MyKoopError(err, msg) {
        if (msg === void 0) { msg = "My Koop Error"; }
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        _super.call(this, err, msg, args);
        this.context = "unknown";
        this.statusCode = 500;
    }
    MyKoopError.prototype.serialize = function () {
        return {
            context: this.context
        };
    };
    return MyKoopError;
})(verror.WError);
module.exports = MyKoopError;
