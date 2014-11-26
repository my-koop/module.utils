var _ = require("lodash");
var getLogger = require("mykoop-logger");
var logger = getLogger(module);
var makeFrontendPathRoute = require("../common/makeFrontendPathRoute");
var MetaDataBuilder = (function () {
    function MetaDataBuilder() {
        this.metaData = {};
    }
    MetaDataBuilder.prototype.get = function () {
        return this.metaData;
    };
    MetaDataBuilder.prototype.addData = function (path, data) {
        if (_.isString(path)) {
            path = [path];
        }
        if (!_.isArray(path) || path.length < 1) {
            console.error("MetaData path must be an array of string of at least 1 element or a single string");
            return;
        }
        var dst = this.metaData;
        _.forEach(path, function (street) {
            if (!dst[street]) {
                dst[street] = {};
            }
            dst = dst[street];
        });
        dst = _.merge(dst, data);
    };
    MetaDataBuilder.prototype.addFrontendRoute = function (options) {
        if (!_.isArray(options.idPath) || options.idPath.length < 1) {
            console.error("RouteMetaData idPath must be an array of string of at least 1 element");
            return;
        }
        var path = makeFrontendPathRoute(options.idPath);
        var data = _.omit(options, "idPath", "children", "default", "component");
        if (data.name === null) {
            data.name = _.last(options.idPath);
        }
        if (options.component) {
            data.handler = this.generateHandler(options.component);
        }
        if (options.permissions) {
            data.permissions = options.permissions;
        }
        this.addData(path, data);
        if (options.default) {
            path.push("children");
            path.push("default");
            var defaultData = {
                default: true,
                handler: this.generateHandler(options.default)
            };
            this.addData(path, defaultData);
        }
    };
    MetaDataBuilder.prototype.generateHandler = function (component) {
        return {
            resolve: "component",
            value: component
        };
    };
    return MetaDataBuilder;
})();
module.exports = MetaDataBuilder;
