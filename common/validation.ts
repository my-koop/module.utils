// http://validatejs.org/ for documentation
var validateJs = require("validate.js");


function validate(obj: any, constraint, options?: any ) {
  return validateJs(obj, constraint, options)
}

module validate {
  export function addValidator(
    validatorName: string,
    validationFunction: (value, options?: any, key?: string, attributes?: any) => string
  ) {
    if(validateJs.validators[validatorName]) {
      console.warn("Custom validator [%s] is already defined", validatorName);
      return;
    }
    validateJs.validators[validatorName] = validationFunction;
  }
}

export = validate;
