const Map = require("../models/map.js")
let maxMapSize=50;

data={
    xAxis:"",
    yAxis:""
};

let map = function(rawdata){
    let m = rawdata.split(" ");
    data.xAxis=parseInt(m[0]);
    data.yAxis=parseInt(m[1]);
    checkdata(data);
    return new Map(data.xAxis,data.yAxis);
}
let checkdata = function (data){
    //is not a number
    if(isNaN(data.xAxis) || isNaN(data.yAxis)){
        throw new Error("Map size must be a number, please check the input.txt")
    }
    //more than max size
    if(data.xAxis>maxMapSize || data.yAxis>maxMapSize){
        throw new Error("Map size is bigger than " + maxMapSize + " please check the input.txt");
    }
    //less than 0
    if(data.xAxis<0 || data.yAxis<0){
        throw new Error("Map size cannot be less than 0");
    }
}
module.exports = { map:map};