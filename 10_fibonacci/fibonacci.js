const fibonacci = function(index) {

    index = parseInt(index);
    if(isNaN(index) || index < 1) return 'OOPS';

    let fibonacciSeq = [0,1];
    for(let i = 2; i <= index; i++) {
        fibonacciSeq.push(fibonacciSeq[1] + fibonacciSeq[0]);
        fibonacciSeq.shift();
    }
    return fibonacciSeq[fibonacciSeq.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
