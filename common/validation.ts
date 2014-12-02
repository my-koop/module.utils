// http://validatejs.org/ for documentation
var validateJs = require("validate.js");
import _ = require("lodash");

validateJs.validators.datetime.parse = function(value) {
  if(value) {
    if(_.isDate(value)) {
      return value.getTime();
    }
    return new Date(value).getTime();
  }
  return NaN;
}

validateJs.validators.datetime.format = function(value) {
  return new Date(value).toString();
}

validateJs.validators.presence = function(value, options) {
  var message = options.message || "can't be blank";
  if(_.isUndefined(value) || _.isNull(value)) {
    return message;
  }

  if(_.isFunction(value)) {
    return;
  }

  if(_.isDate(value)) {
    return;
  }

  if(_.isString(value)) {
    if ((/^\s*$/).test(value)) {
      return message;
    }
    return;
  }

  if(_.isObject(value) && _.isEmpty(value)) {
    return message;
  }
}

function validation(obj: any, constraint, options?: any ) {
  return validateJs(obj, constraint, options)
}

module validation {
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

export = validation;
