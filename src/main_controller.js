const iodata = require("./data/iodata.js");
const Rinit = require("./inits/robotinit.js");
const Minit = require("./inits/mapinit.js")
const Map = require("./models/map");
const Robot = require("./models/robot");

let executeInstructions = function(robot, map){
    while (robot.lost==false && robot.instructions.length!=0) {
        let inst = robot.instructions.shift();
        //turn
        if(inst == 'R' || inst == 'L'){
            robot.turn(inst);
        }
        //move forward
        else{
            let nextStep={
                xAxis: robot.xAxis,
                yAxis: robot.yAxis,
                dir: robot.direction
            }
            if(!map.haveScent(nextStep)){
                robot.move() 
                //if after moving the robot falls off, the program register the last valid position in the map
                if(map.fallOff(robot.xAxis,robot.yAxis)){
                    map.addScent(nextStep);
                    robot.xAxis=nextStep.xAxis;
                    robot.yAxis=nextStep.yAxis;
                    robot.lost=true;
                }
            }  
        }
        //to see step by step the movement of the robot uncomment the line below
        //console.log(robot);
    }
    let solution = robot.xAxis + " " + robot.yAxis + " " + robot.direction;
    if(robot.lost){
        solution = solution + " LOST";
    }
    return solution;   
}

let main = function(){
    let map = Minit.map(iodata.getMap());
    let robots = Rinit.robIni(iodata.getRobots());
    let output="";
    for (let i = 0; i < robots.length; i++) {
        output += executeInstructions(robots[i],map) + "\n";
    }
    return output;
}
main();
module.exports = {
    main:main
}