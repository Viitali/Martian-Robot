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
    let scentExist=false;
    for (let x of this.scents) {
        if(robotNextStep.xAxis==x.xAxis && robotNextStep.yAxis==x.yAxis && robotNextStep.dir==x.dir){
            scentExist=true;
            break;
        }
    }
    return scentExist;
}
module.exports = Map;