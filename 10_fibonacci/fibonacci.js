const fibonacci = function (num) {
    let final = 1;
    let current = 1;
    let previous = 0;

    if (num < 0) {
        return "OOPS";
    }

    for (let i = 0; i < num - 2; i++) {
        previous = current;
        current = final;
        final = previous + current;
    }

    return final;
};

// Do not edit below this line
module.exports = fibonacci;
