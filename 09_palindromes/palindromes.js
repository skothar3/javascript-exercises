const palindromes = function (str) {
    str = str.toLowerCase().replace(/[ .,!?\/@#%]/g,'');

    if (str === str.split('').reverse().join('')) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
