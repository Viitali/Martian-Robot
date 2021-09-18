const main_controller = require('./main_controller.js');
const iodata = require("./data/iodata");

//reads the input.txt content and executes the program
let output = main_controller.main();
//write the result in the output.txt file
iodata.writeData(output);
