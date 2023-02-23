const findTheOldest = function (people) {
    let person = {
        name: "",
        yearOfBirth: 0,
        yearOfDeath: 0,
    }

    let isAlive = false;
    let age = 0;
    let prevAge = 0;

    let currentYear = new Date().getFullYear();

    for (let i = 0; i < people.length; i++) {
        prevAge = age;

        // get age of current person.
        if (people[i].yearOfDeath == undefined) {
            age = currentYear - people[i].yearOfBirth;
            isAlive = true;
        } else {
            age = people[i].yearOfDeath - people[i].yearOfBirth;
        }

        // check if age is >= current age.
        if (age > prevAge) {
            person = people[i];
        }
    }

    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
