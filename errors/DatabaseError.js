var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MyKoopError = require("./MyKoopError");
var DatabaseError = (function (_super) {
    __extends(DatabaseError, _super);
    function DatabaseError(err, msg) {
        if (msg === void 0) { msg = "Database Error"; }
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        _super.call(this, err, msg, args);
    }
    DatabaseError.prototype.serialize = function () {
        return {
            context: "database"
        };
    };
    return DatabaseError;
})(MyKoopError);
module.exports = DatabaseError;
