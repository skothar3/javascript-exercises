const sumAll = function(num1, num2) {
    args = Array.from(arguments);
    if(args.some(x => typeof(x) !== 'number' || x < 0)) {
        return 'ERROR'
    }

    args.sort(function(a,b){return a-b});
    output = 0;
    for(let i = args[0]; i <= args[1]; i++) {
        output += i;
    }
    return output
};

// Do not edit below this line
module.exports = sumAll;
