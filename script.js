// **Challenges**
// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
// isNumberPositive(-1); // returns false
// isNumberPositive(10); // returns true
const isNumberPositive = (getNumber) => {
    if (getNumber >= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));

// 2. Write a function that takes a number of days and converts it into an age.
// convertDaysToAge(3650); // returns 10
// convertDaysToAge(6570); // returns 18
const convertDaysToAge = (days) => {
    const age = days/365;
    return age;
}

console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));


// 3. Write a function that takes three numbers and returns the largest of the three numbers.
// getLargestNumber(2, 1, 4); // returns 4
// getLargestNumber(6, 2, 4); // returns 6
const getLargestNumber = (n1, n2, n3) => {
    const maxNum = Math.max(n1, n2, n3);
    return maxNum;
}

console.log(getLargestNumber(2, 1, 4));
console.log(getLargestNumber(6, 2, 4));


// 4. Write a function that takes an array of names and returns the last name from the array of names.
// getLastName(["Charlie", "Rob", "Andy"]); // returns "Andy"
// getLastName(["Ash", "Stu"]); // returns "Stu"

const getLastName = arrayName => {
    const lastName = arrayName[arrayName.length - 1];
    return lastName;
}

console.log(getLastName(["Charlie", "Rob", "Andy"]));
console.log(getLastName(["Ash", "Stu"]));


// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive.
// It should return false if there are one or more negative numbers in the array.
// allNumbersPositive([2,4,5]); // returns true
// allNumbersPositive([-5,4,6]); // returns false

const allNumbersPositive = arrayNumber => {
    for (let i = 0; i < arrayNumber.length; i++ ) {
        if (arrayNumber[i] <0) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(allNumbersPositive([2,4,5]));
console.log(allNumbersPositive([-5,4,6]));
