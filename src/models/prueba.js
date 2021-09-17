
const scents = [
    {x: 2, y: 2, direccion: 'N'},
    {x: 3, y: 0, direccion: 'S'},
    {x: 1, y: 5, direccion: 'E'}
];

let robotNextStep = {x:1, y:5, direccion: 'E'};


const sol = function(robotNextStep) {
    this.scents.find(this.scents, function (scent) {
        return isEqual(scent, robotNextStep)}); 
    }
if(sol)
    {console.log('TRUE')}
else
{
    console.log('false')
}
