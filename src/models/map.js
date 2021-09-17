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
Map.addScent = function(scentinfo){

}
Map.haveScent = function(){
    if(scentinfo){
        return true;
    }
    return false;
}