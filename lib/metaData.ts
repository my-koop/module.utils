import utils = require("mykoop-utils");
import _ = require("lodash");

class MetaData implements utils.MetaData {
  private metaData: any = {};

  get() {
    return this.metaData;
  }

  addData(path: string[], data: any): void;
  addData(path: string, data: any): void;
  addData(path: any, data: any): void {
    if(_.isString(path)) {
      path = [path];
    }

    if(!_.isArray(path) || path.length < 1) {
      console.error("MetaData path must be an array of string of at least 1 element or a single string");
      return;
    }

    var dst = this.metaData;
    _.forEach(path, function(street) {
      if(!dst[street]) {
        dst[street] = {};
      }
      dst = dst[street];
    });

    dst = _.merge(dst,data);
  }

  addRoute(options: utils.RouteMetaData) {
    if(!_.isArray(options.idPath) || options.idPath.length < 1) {
      console.error("RouteMetaData idPath must be an array of string of at least 1 element");
      return;
    }

    var dataId = options.idPath.pop();
    var path = options.idPath.reduce(function(path: string[], id){
      path.push(id);
      path.push("children");
      return path;
    }, ["routes"]).concat([dataId]);

    var data: any = {};

    if(options.path) {
      data.path = options.path;
    }

    if(options.name !== undefined) {
      if(options.name === null) {
        data.name = dataId;
      } else {
        data.name = options.name;
      }
    }

    if(options.component) {
      data.handler = this.generateHandler(options.component);
    }

    this.addData(path, data);

    if(options.default) {
      path.push("children");
      path.push("default");
      var defaultData = {
        default: true,
        handler: this.generateHandler(options.default)
      }

      this.addData(path, defaultData);
    }
  }

  generateHandler(component: string) {
    return {
      resolve: "component",
      value: component
    }
  }
}

export = MetaData;
