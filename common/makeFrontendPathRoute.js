function makeFrontendPathRoute(idPath) {
    return idPath.slice(0, idPath.length - 1).reduce(function (path, id) {
        path.push(id);
        path.push("children");
        return path;
    }, ["routes"]).concat([idPath[idPath.length - 1]]);
}
module.exports = makeFrontendPathRoute;
