declare class ApplicationError extends MyKoopError {
    public errData: any;
    constructor(errData: any, err: Error, msg: string, ...args: any[]);
    public serialize(): ErrorInterfaces.SerializeResult;
}
