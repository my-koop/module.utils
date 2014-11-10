/// <reference path="../typings/tsd.d.ts" />
import makeFrontendPathRoute = require("../common/makeFrontendPathRoute");
var metadata = require("dynamic-metadata");
import _ = require("lodash");

function getRouteName(idPath: string[]) {
  var path = makeFrontendPathRoute(idPath);
  var routeInfo: any = _.reduce(path, function(route, id) {
    return route[id];
  }, metadata);

  return routeInfo.name;
}

export = getRouteName;
