const fs = require('fs');
var content = 'succcess';


fs.appendFile('output.txt' ,  content , function(error){
    if(error)
        console.log('Error in the output file');
});