
declare class DatabaseError extends MyKoopError {
    constructor(err: Error, msg?: string, ...args: any[]);
    public serialize(): ErrorInterfaces.SerializeResult;
}
