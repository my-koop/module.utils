declare class ApplicationError extends MyKoopError {
    public errData: any;
    constructor(err: Error, errData?: any, msg?: string, ...args: any[]);
    public serialize(): ErrorInterfaces.SerializeResult;
}
