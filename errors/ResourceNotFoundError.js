var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ApplicationError = require("./ApplicationError");
var ResourceNotFoundError = (function (_super) {
    __extends(ResourceNotFoundError, _super);
    function ResourceNotFoundError(err, data, msg) {
        if (msg === void 0) { msg = "Resource Not Found Error"; }
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        _super.call(this, err, data, msg, args);
        this.statusCode = 404;
        this.context = "notFound";
    }
    return ResourceNotFoundError;
})(ApplicationError);
module.exports = ResourceNotFoundError;
