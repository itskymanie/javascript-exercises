const sumAll = function(begin, end) {
    let sum = begin;
    for( let i = begin + 1; i <= end ; ++i){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
