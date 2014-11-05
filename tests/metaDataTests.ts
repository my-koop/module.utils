var util = require("util");
import utils = require("../index");

var metaData: utils.MetaDataBuilder = new utils.MetaDataBuilder();

metaData.addFrontendRoute({
  idPath: ["admin","inventory","description"],
  path: "desc",
  name: "Description",
  component: "DescPage"
});

metaData.addFrontendRoute({
  idPath: ["admin","inventory"],
  path: "/inventory",
  component: "InventoryWrapper",
  name: null,
  default: "ItemList"
});

metaData.addData("translations",{en:{general:{test:"trololol"}}});

console.log(util.inspect(metaData.get(),{depth:10}));
