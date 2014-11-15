import DatabaseError = require("../errors/DatabaseError");

class BaseModule implements mykoop.IModule {
  moduleManager: mykoop.ModuleManager;

  getModuleManager(): mykoop.ModuleManager {
    return this.moduleManager;
  }
  setModuleManager(moduleManager: mykoop.ModuleManager): void {
    this.moduleManager = moduleManager;
  }

  private callWithConnection(
    method: (connection, params, callback) => void,
    params: any,
    callback: (err, result?) => void
  ) {
    var self: any = this;
    if(typeof method === "string") {
      method = self["__" + method];
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
