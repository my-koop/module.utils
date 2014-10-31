var validateJs = require("validate.js");

function validate(obj: any, constraint, options?: any ) {
  return validateJs(obj, constraint, options)
}

export = validate;
