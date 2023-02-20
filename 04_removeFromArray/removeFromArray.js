const removeFromArray = function (arr) {
    let filteredArray = arr;

    for (let i = 1; i < arguments.length; i++) {
        console.log("argument " + i + ": " + arguments[i]);
        filteredArray = filteredArray.filter(x => x !== arguments[i])
        console.log(filteredArray);
    }

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
