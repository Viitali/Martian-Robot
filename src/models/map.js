let Map = function(xAxisMax, yAxisMax){
    this.xAxisMax = xAxisMax;
    this.yAxisMax = yAxisMax;
    this.scents = [];
}
Map.prototype.fallOff = function(xAxis, yAxis){
    if(xAxis>this.xAxisMax || xAxis<0 || yAxis>this.yAxisMax || yAxis<0){
        return true;
    }
    return false;
}
Map.prototype.addScent = function(scent){
    this.scents.push(scent);
}
//return true if there is a scent
Map.prototype.haveScent = function(robotNextStep) {
    return this.scents.find(Element=> Element==robotNextStep);
    /*this.scents.find(this.scents, function (scent) {
        return isEqual(scent, robotNextStep)}); */
}

module.exports = Map;