/// <reference path="./verror.d.ts" />
import DatabaseError = require("./DatabaseError");
import ApplicationError = require("./ApplicationError");
import ValidationError = require("./ValidationError");
import verror = require("verror");
import ErrorInterfaces = require("./ErrorInterfaces");
declare class MyKoopError extends verror.WError {
    static DatabaseError: typeof DatabaseError;
    static ApplicationError: typeof ApplicationError;
    static ValidationError: typeof ValidationError;
    constructor(err: Error, msg: string, ...args: any[]);
    public serialize(): ErrorInterfaces.SerializeResult;
}
export = MyKoopError;
