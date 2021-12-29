// Arrow Functions

function addTwo(num) {
    return num + 2; //function statement
}

const addThree = function(num) {
    return num + 3; //function expression
}

const addFour = (num) => {
    return num + 4; //arrow function, v1
}

console.log(addFour(2))

const addFive = num => num + 5; 
console.log(addFive(19)) // arrow function, v2

const addTwoNums = function(numOne, numTwo) {
    return numOne + numTwo;
}

console.log(addTwoNums(7, 33))


const doubleUntilOver1000 = num => {
    while (num < 1000) {
        num *= 2
    }
    return num;
}

console.log(doubleUntilOver1000(8))
