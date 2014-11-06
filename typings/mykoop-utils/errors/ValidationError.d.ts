declare class ValidationError extends MyKoopError {
    public validationErrorData: ErrorInterfaces.ValidationErrorData;
    constructor(
      err: Error,
      validationErrorData: ErrorInterfaces.ValidationErrorData,
      msg?: string,
      ...args: any[]
    );
    public serialize(): ErrorInterfaces.SerializeResult;
}
