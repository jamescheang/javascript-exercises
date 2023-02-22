const sumAll = function () {
    let start = arguments[0];
    let end = arguments[1];
    let finalSum = 0;

    if (typeof (start) != 'number' || typeof (end) != 'number') {
        return 'ERROR';
    }

    if (start < 0 || end < 0) {
        return 'ERROR';
    }

    if (end < start) {
        start = arguments[1];
        end = arguments[0];
    }

    for (let i = start; i <= end; i++) {
        finalSum += i;
    }

    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
