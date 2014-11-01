import MyKoopError = require("./MyKoopError");
import ErrorInterfaces = require("./ErrorInterfaces");
declare class AplicationError extends MyKoopError {
    public errData: any;
    constructor(errData: any, err: Error, msg: string, ...args: any[]);
    public serialize(): ErrorInterfaces.SerializeResult;
}
export = AplicationError;
