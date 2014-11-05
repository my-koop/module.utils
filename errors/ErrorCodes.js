var ErrorCodes;
(function (ErrorCodes) {
    (function (codes) {
        codes[codes["Unknown"] = 0] = "Unknown";
        codes[codes["Database"] = 1] = "Database";
        codes[codes["Application"] = 2] = "Application";
        codes[codes["Validation"] = 3] = "Validation";
    })(ErrorCodes.codes || (ErrorCodes.codes = {}));
    var codes = ErrorCodes.codes;
})(ErrorCodes || (ErrorCodes = {}));
module.exports = ErrorCodes;
