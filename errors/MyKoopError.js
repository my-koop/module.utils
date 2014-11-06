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
        if (typeof msg === "undefined") { msg = "My Koop Error"; }
        var args = [];
        for (var _i = 0; _i < (arguments.length - 2); _i++) {
            args[_i] = arguments[_i + 2];
        }
        _super.call(this, err, msg, args);
    }
    MyKoopError.prototype.serialize = function () {
        return {
            context: "unknown"
        };
    };
    return MyKoopError;
})(verror.WError);

module.exports = MyKoopError;
