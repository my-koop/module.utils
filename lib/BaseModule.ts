import DatabaseError = require("../errors/DatabaseError");
import _ = require("lodash");

class BaseModule implements mykoop.IModule {
  moduleManager: mykoop.ModuleManager;

  getModuleManager(): mykoop.ModuleManager {
    return this.moduleManager;
  }
  setModuleManager(moduleManager: mykoop.ModuleManager): void {
    this.moduleManager = moduleManager;
  }

  callWithConnection(
    method: (connection, params, callback) => void,
    params: any,
    callback: (err, result?) => void
  ) {
    var self: any = this;
    if(typeof method === "string") {
      method = self["__" + method];
    }
    method = _.bind(method, self);
    if(!self.db) {
      return callback(new DatabaseError(null, "Database Unavailable"));
    }
    self.db.getConnection(function(err, connection, cleanup) {
      if(err) {
        return callback(new DatabaseError(err));
      }
      method(connection, params, function(err, result) {
        cleanup();
        callback(err, result);
      });
    });
  }
}
export = BaseModule;
