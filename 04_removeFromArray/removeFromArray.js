const removeFromArray = function() {
    const args = Array.from(arguments);
    let inputList = args[0];
    let argsToRemove = args.slice(1);
    let outputList = inputList;
    for(let i = 0; i < argsToRemove.length; i++) {
        outputList = outputList.filter(x => x !==argsToRemove[i]);
    }
    return outputList
};

// Do not edit below this line
module.exports = removeFromArray;
