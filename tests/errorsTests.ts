export import MyKoopError = require("../errors/MyKoopError");

var a = new MyKoopError(null, "patate %s", "a ta mere");
var b = new MyKoopError(a, "patate %s", "a ma mere");
var c = new MyKoopError(b, "patate %s", "a sa mere");
var d = new MyKoopError(c, "patate %s", "a ton mere");
//var a = new Error("patate");
console.log(" a instanceof Error", a instanceof Error);
console.log(" a instanceof MyKoopError", a instanceof MyKoopError);
console.log(" d.name", d.name);
console.log(" d.message", d.message);
console.log(" d.stack", d.stack);
console.log(" d.cause()", d.cause());
console.log(" d.toString()", d.toString());
