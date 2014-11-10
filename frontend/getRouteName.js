/// <reference path="../typings/tsd.d.ts" />
var makeFrontendPathRoute = require("../common/makeFrontendPathRoute");
var metadata = require("dynamic-metadata");
var _ = require("lodash");

function getRouteName(idPath) {
    var path = makeFrontendPathRoute(idPath);
    var routeInfo = _.reduce(path, function (route, id) {
        return route[id];
    }, metadata);

    return routeInfo.name;
}

module.exports = getRouteName;
