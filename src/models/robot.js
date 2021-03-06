
var Robot = function(xAxis, yAxis, direction, instructions){
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.direction = direction;
    this.instructions = instructions;
    this.lost=false;
};

Robot.prototype.turn = function (dir) {
    var turning = {
        'R': {'N': 'E', 'E': 'S', 'S': 'W', 'W': 'N'},
        'L': {'N': 'W', 'E': 'N', 'S': 'E', 'W': 'S'}
    };

    this.direction = turning[dir][this.direction];
};

Robot.prototype.move = function () {
    var forwardDirection = {
        'N': {xAxis: this.xAxis, yAxis: this.yAxis + 1},
        'S': {xAxis: this.xAxis, yAxis: this.yAxis - 1},
        'E': {xAxis: this.xAxis + 1, yAxis: this.yAxis},
        'W': {xAxis: this.xAxis - 1, yAxis: this.yAxis}
    };

    this.xAxis = forwardDirection[this.direction].xAxis;
    this.yAxis = forwardDirection[this.direction].yAxis;
};

module.exports = Robot;