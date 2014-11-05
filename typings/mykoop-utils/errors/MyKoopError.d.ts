/// <reference path="./verror.d.ts" />
/// <reference path="./ErrorInterfaces.d.ts" />
/// <reference path="./DatabaseError.d.ts" />
/// <reference path="./ValidationError.d.ts" />
/// <reference path="./ApplicationError.d.ts" />

declare class MyKoopError extends VErrorTypes.VError {
    static DatabaseError: DatabaseError;
    static ApplicationError: ApplicationError;
    static ValidationError: ValidationError;
    constructor(err: Error, msg: string, ...args: any[]);
    public serialize(): ErrorInterfaces.SerializeResult;
}
