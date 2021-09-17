var Map = function(xAxisMax, yAxisMax){
    this.xAxisMax = xAxisMax;
    this.yAxisMax = yAxisMax;
    this.scents = [];
}
Map.fallOff = function(xAxis, yAxis){
    if(xAxis>this.xAxisMax || xAxis<0 || yAxis>this.yAxisMax || yAxis<0){
        return true;
    }
    return false;
}
Map.addScent = function(scent){
    this.scents.push(scent);
}
//return true if there is a scent
Map.haveScent = function(robotNextStep) {
    this.scents.find(this.scents, function (scent) {
        return isEqual(scent, robotNextStep)}); 
}