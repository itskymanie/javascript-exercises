const removeFromArray = function(array,removedArg) {
    for (let i = 0; i < array.length; ++i){
        if(array[i] == removedArg)
        {
            array.splice(i,i+1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
