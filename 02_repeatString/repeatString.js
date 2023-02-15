const repeatString = function (text, repeatTimes) {
    let finalText = "";

    if (repeatTimes < 0) {
        return "ERROR";
    }

    for (let i = 0; i < repeatTimes; i++) {
        finalText += text;
    }

    return finalText;
};

// Do not edit below this line
module.exports = repeatString;
