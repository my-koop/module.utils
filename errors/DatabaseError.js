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
        var args = [];
        for (var _i = 0; _i < (arguments.length - 2); _i++) {
            args[_i] = arguments[_i + 2];
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
