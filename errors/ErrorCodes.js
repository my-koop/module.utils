var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["Unknown"] = 0] = "Unknown";
    ErrorCodes[ErrorCodes["Database"] = 1] = "Database";
    ErrorCodes[ErrorCodes["Application"] = 2] = "Application";
    ErrorCodes[ErrorCodes["Validation"] = 3] = "Validation";
})(ErrorCodes || (ErrorCodes = {}));
module.exports = ErrorCodes;
