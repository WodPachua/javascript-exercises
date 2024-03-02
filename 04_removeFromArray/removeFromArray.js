const removeFromArray = function(oldArray, ...toRemove) {
    let newArray = [];
    
    oldArray.forEach(arrayItem => {
        if (!toRemove.includes(arrayItem)){
            newArray.push(arrayItem);
        }
    })
    

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
