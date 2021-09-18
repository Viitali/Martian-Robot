const iodata = require("./data/iodata.js");
const rinit = require("./inits/robotinit.js");

let r = iodata.getRobots();
let sol = rinit.robIni(r);