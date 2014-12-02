// http://validatejs.org/ for documentation
var validateJs = require("validate.js");
var _ = require("lodash");
validateJs.validators.datetime.parse = function (value) {
    if (value) {
        if (_.isDate(value)) {
            return value.getTime();
        }
        return new Date(value).getTime();
    }
    return NaN;
};
validateJs.validators.datetime.format = function (value) {
    return new Date(value).toString();
};
validateJs.validators.presence = function (value, options) {
    var message = options.message || "can't be blank";
    if (_.isFunction(value)) {
        return;
    }
    if (_.isDate(value)) {
        return;
    }
    if (_.isString(value)) {
        if ((/^\s*$/).test(value)) {
            return message;
        }
        return;
    }
    if (_.isEmpty(value)) {
        return message;
    }
};
function validation(obj, constraint, options) {
    return validateJs(obj, constraint, options);
}
var validation;
(function (validation) {
    function addValidator(validatorName, validationFunction) {
        if (validateJs.validators[validatorName]) {
            console.warn("Custom validator [%s] is already defined", validatorName);
            return;
        }
        validateJs.validators[validatorName] = validationFunction;
    }
    validation.addValidator = addValidator;
})(validation || (validation = {}));
module.exports = validation;
