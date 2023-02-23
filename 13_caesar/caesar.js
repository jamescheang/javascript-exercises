const caesar = function (str, shift) {
    let arr = Array.from(str);
    console.log(arr);
    let newArr = [];
    let charCode = 0;
    let newCharCode = 0;

    arr.forEach(x => {
        console.log(x.charCodeAt(0));
        // set charCode
        charCode = x.charCodeAt(0);

        // loop back for uppercase A=65 to Z=90
        if (charCode >= 65 && charCode <= 90) {
            newCharCode = charCode + shift;
            while (newCharCode < 65) {
                newCharCode += 26;
                console.log(newCharCode);
            }
            while (newCharCode > 90) {
                newCharCode -= 26;
                console.log(newCharCode);
            }
            newArr.push(String.fromCharCode(newCharCode));
        } else {


            // loop back for uppercase a=97 to Z=122
            if (charCode >= 97 && charCode <= 122) {
                newCharCode = charCode + shift;
                while (newCharCode < 97) {
                    newCharCode += 26;
                    console.log(newCharCode);
                }
                while (newCharCode > 122) {
                    newCharCode -= 26;
                    console.log(newCharCode);
                }
                newArr.push(String.fromCharCode(newCharCode));
            } else {
                newArr.push(x);
            }
        }
    });

    console.log(newArr.join(""));

    return newArr.join("");
};

// Do not edit below this line
module.exports = caesar;
