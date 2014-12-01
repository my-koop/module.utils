// http://validatejs.org/ for documentation
var validateJs = require("validate.js");
validateJs.validators.datetime.parse = function (value) {
    if (value) {
        return new Date(value).getTime();
    }
    return NaN;
};
validateJs.validators.datetime.format = function (value) {
    return new Date(value).toString();
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
