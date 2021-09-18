const Robot = require("../models/robot.js")

let maxInstructions=100;
let directions = ["N","E","S","W"]
let Existentinstructions = ["L","R","F"];

let robIni = function(rawdata){
    for (let i = 0; i < rawdata.length; i++) {
        let coord = rawdata[i][0].split(" ");
        let robotdata={
            xAxis:coord[0],
            yAxis:coord[1],
            direction:coord[2],
            instructions:rawdata[i][1].split("")
        }
        checkdata(robotdata);
        return new Robot(robotdata.xAxis,robotdata.yAxis,robotdata.direction,robotdata.instructions);    
    }
}
let checkdata = function(robotdata){
    //not a number
    if(isNaN(robotdata.xAxis) || isNaN(robotdata.yAxis)){
        throw new Error("Robot axis must be a number, check input.txt");
    }
    //invalid direcction
    if(!directions.includes(robotdata.direction)){
        throw new Error("Robot direction is incorrect, check input.txt");
    }
    //too much instructions
    if(robotdata.instructions.length>maxInstructions){
        throw new Error("Robot instructions must be less than" + maxInstructions + " , check input.txt");
    }
    //invalid instructions
    robotdata.instructions.map(function(v){
        if(!Existentinstructions.includes(v)){
            throw new Error("Robot instructions are incorrect, valid instructions are " + Existentinstructions);
        }
    })
}


module.exports = {
    robIni:robIni,
}
