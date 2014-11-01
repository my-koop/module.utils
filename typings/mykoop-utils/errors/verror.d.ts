

declare module "verror" {
  class VError implements Error {
    constructor(err: Error, msg: string, ...args: any[]);
    message: string;
    name: string;
    toString(): string;
    cause(): string;
    stack: string;
  }
  module VError {
    export class WError {
      constructor(err: Error, msg: string, ...args: any[]);
      message: string;
      name: string;
      toString(): string;
      cause(): string;
      stack: string;
    }
  }
  export = VError;
}
