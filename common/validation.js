var validateJs = require("validate.js");

function validate(obj, constraint, options) {
    return validateJs(obj, constraint, options);
}

module.exports = validate;
