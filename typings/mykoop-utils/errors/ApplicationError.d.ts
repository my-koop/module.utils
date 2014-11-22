/// <reference path="./ErrorInterfaces.d.ts" />
/// <reference path="./MyKoopError.d.ts" />
declare class ApplicationError extends MyKoopError {
    errData: any;
    static ValidationError: any;
    static RessourceNotFoundError: any;
    constructor(err: Error, errData?: any, msg?: string, ...args: any[]);
    serialize(): ErrorInterfaces.SerializeResult;
}
