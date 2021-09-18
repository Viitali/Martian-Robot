const fs = require('fs');
let filepath = "./data/"
let map;
let robots;

let parsedata = function(){
    let data = fs.readFileSync(filepath + 'input.txt', 'utf8');
    const arr = data.toString().replace(/\r\n/g,'\n').split('\n');
    return arr;
}
let getMap = function(){
    return parsedata()[0];
};

//returns an array of the two lines of each robot info (the 1º line is the init position of the robot and the 2º are the commands to execute)
let getRobots = function(){
    let r = parsedata().splice(1, parsedata().length); // deleting the 1º line because its the map size
    let i=0;
    let robots=[];
    if(r.length%2!=0)
        throw console.error("The robot info is incorrect, please check the input.txt file");
    while (r.length>0) {
        robots[i] = r.splice(0,2);
        i++;
    }
    return robots;
};

let writeData = function (output){
    fs.writeFile(filepath + 'output.txt',output,function(err){
        if(err)
            err("Error trying write the output data!");
    });
}
module.exports = {
    getMap: getMap,
    getRobots: getRobots,
    writeData: writeData
};