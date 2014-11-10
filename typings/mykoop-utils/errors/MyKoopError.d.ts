/// <reference path="./verror.d.ts" />
/// <reference path="./ErrorInterfaces.d.ts" />
/// <reference path="./DatabaseError.d.ts" />
/// <reference path="./ValidationError.d.ts" />
/// <reference path="./ApplicationError.d.ts" />

declare class MyKoopError extends VErrorTypes.VError {
    public static DatabaseError: typeof DatabaseError;
    public static ApplicationError: typeof ApplicationError;
    public static ValidationError: typeof ValidationError;
    public statusCode: number;
    constructor(err: Error, msg?: string, ...args: any[]);
    public serialize(): ErrorInterfaces.SerializeResult;
}
