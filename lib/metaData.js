var _ = require("lodash");

var MetaData = (function () {
    function MetaData() {
        this.metaData = {};
    }
    MetaData.prototype.get = function () {
        return this.metaData;
    };

    MetaData.prototype.addData = function (path, data) {
        if (_.isString(path)) {
            path = [path];
        }

        if (!_.isArray(path) || path.length < 1) {
            console.error("MetaData path must be an array of string of at least 1 element");
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

    MetaData.prototype.addRoute = function (options) {
        if (!_.isArray(options.idPath) || options.idPath.length < 1) {
            console.error("MetaData idPath options must have idPath of type string[] with at least one");
            return;
        }

        var dataId = options.idPath.pop();
        var path = ["routes"];
        _.forEach(options.idPath, function (id) {
            path.push(id);
            path.push("children");
        });
        path.push(dataId);

        var data = {};

        if (options.path) {
            data.path = options.path;
        }

        if (options.name !== undefined) {
            if (options.name === null) {
                data.name = dataId;
            } else {
                data.name = options.name;
            }
        }

        if (options.component) {
            data.handler = this.generateHandler(options.component);
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

    MetaData.prototype.generateHandler = function (component) {
        return {
            resolve: "component",
            value: component
        };
    };
    return MetaData;
})();

module.exports = MetaData;
