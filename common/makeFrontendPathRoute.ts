import _ = require("lodash");

function makeFrontendPathRoute(idPath: string[]) {
  return idPath.slice(0, idPath.length - 1).reduce(function(path: string[], id) {
    path.push(id);
    path.push("children");
    return path;
  }, ["routes"]).concat([_.last(idPath)]);
}
export = makeFrontendPathRoute;
