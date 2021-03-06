var DatabaseError = require("../errors/DatabaseError");
var _ = require("lodash");
var BaseModule = (function () {
    function BaseModule() {
    }
    BaseModule.prototype.getModuleManager = function () {
        return this.moduleManager;
    };
    BaseModule.prototype.setModuleManager = function (moduleManager) {
        this.moduleManager = moduleManager;
    };
    BaseModule.prototype.callWithConnection = function (method, params, callback) {
        var self = this;
        if (typeof method === "string") {
            method = self["__" + method];
        }
        method = _.bind(method, self);
        if (!self.db) {
            return callback(new DatabaseError(null, "Database Unavailable"));
        }
        self.db.getConnection(function (err, connection, cleanup) {
            if (err) {
                return callback(new DatabaseError(err));
            }
            method(connection, params, function (err, result) {
                cleanup();
                callback(err, result);
            });
        });
    };
    return BaseModule;
})();
module.exports = BaseModule;
