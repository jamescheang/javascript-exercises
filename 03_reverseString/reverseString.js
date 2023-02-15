const reverseString = function (textToReverse) {
    const textArray = textToReverse.split("");
    const reverseArray = textArray.reverse();
    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
