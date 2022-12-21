const repeatString = function(inputString,numRepeats) {
    
    if(numRepeats >= 0) 
        {let outputString = '';

        for(let i = 1; i <= numRepeats; i++) {
            outputString += inputString;
            
        }
        return outputString
    }
    else
        {
        let outputString = 'ERROR';
        return outputString 
        }

};

// Do not edit below this line
module.exports = repeatString;
