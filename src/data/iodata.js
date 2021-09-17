const fs = require('fs');

let map;
let robots;

let parsedata = function(){
    let data = fs.readFileSync('input.txt', 'utf8');
    const arr = data.toString().replace(/\r\n/g,'\n').split('\n');
    //console.log(arr);
    return arr;
}
let getMap = function(){
    return parsedata()[0];
};

//returns an array of the two lines of each robot info (the 1º line is the init position of the robot and the 2º are the commands to execute)
let getRobots = function(){
    let r = parsedata().splice(1, parsedata().length); // deleting the 1º line because is the map size
    let i=0;
    let robots=[];
    if(r.length%2!=0)
        throw console.error("The robot info is incorrect, please check the input.txt file");
    while (r.length>0) {
        robots[i] = r.splice(0,2);
        console.log(robots[i]);
        i++;
    }
    return robots;
};

let writeData = function (info){
    fs.writeFile('output.txt',info,function(err){
        if(err)
            err("Error trying write the output data!");
    });
}
module.exports = {
    getMap: getMap,
    getRobots: getRobots,
    writeData: writeData
};