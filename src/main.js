const main_controller = require('./main_controller.js');
const iodata = require("./data/iodata");
const fs = require('fs');

let output = main_controller.main();
iodata.writeData(output);
