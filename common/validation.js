// http://validatejs.org/ for documentation
var validateJs = require("validate.js");

function validate(obj, constraint, options) {
    return validateJs(obj, constraint, options);
}

var validate;
(function (validate) {
    function addValidator(validatorName, validationFunction) {
        if (validateJs.validators[validatorName]) {
            console.warn("Custom validator [%s] is already defined", validatorName);
            return;
        }
        validateJs.validators[validatorName] = validationFunction;
    }
    validate.addValidator = addValidator;
})(validate || (validate = {}));

module.exports = validate;
