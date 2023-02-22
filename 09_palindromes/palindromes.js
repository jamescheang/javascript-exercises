const palindromes = function (str) {
    let regexPattern = /[^A-Za-z0-9]/g;
    let ans = str.toLowerCase().replace(regexPattern, "");
    console.log(ans);

    let arr = Array.from(ans);

    let last = 0;

    for (let i = 0; i < arr.length; i++) {
        last = arr.length - i - 1;
        if (arr[i] != arr[last]) {
            return false;
        }
    }

    return true;

};

// Do not edit below this line
module.exports = palindromes;
