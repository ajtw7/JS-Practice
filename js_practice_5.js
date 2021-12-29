let num = 7;

function divideByTwo(num) {
    return Math.floor(num / 2);
}



console.log(divideByTwo(10))
console.log(divideByTwo(25))
console.log(divideByTwo(1235))


// =======================


var getFirstChar = function(str) {
    return str[0].toUpperCase();
}

console.log(getFirstChar('i love javascript'), getFirstChar('hello'))

const getSeventyFiveDiscount = function(num) {
    return num * .75;
}

console.log(getSeventyFiveDiscount())


// ========================


let declareTwo = 'i love javascript';

console.log(declareTwo.indexOf('j'))
console.log(declareTwo.indexOf('z'))

// slice of declareTwo
console.log(declareTwo.slice(7))
console.log(declareTwo.slice(2, 7))


// replace
console.log(declareTwo.replace('javascript', 'html'))


//split
console.log(declareTwo.split(' '));

// Number Methods

let luckyNum = 13;
console.log(luckyNum.toFixed(2));

// with dollar sign
console.log(`$${luckyNum.toFixed(2)}`)

// Math max
console.log(Math.max(28, 30));
console.log(Math.min(30, 28));

// Array Methods
let ages = [1, 2, 3, 4];

console.log(ages.slice(2, 4));
console.log(ages.push(5, 6));
console.log(ages);
console.log(ages.splice(4, 2));

console.log(ages);

// CHAINING
let fullName = 'Andrew Thomas-Worsley'
const last = fullName.charAt(fullName.length - 1);
console.log(last)

console.log(fullName.toUpperCase().split(' '));

console.log(fullName)

let alphabet = 'abc';
console.log(alphabet.split('').reverse().join())

console.log(fullName.split('').reverse().join(""))

let fullNameReverse = fullName.split('').reverse().join("");
console.log(fullNameReverse)

let coachName = 'Leroy Galloway';
console.log(coachName.split(' '));

let score = 40
let arrayCoachName = coachName.split(' ');
console.log(arrayCoachName[1][7].concat(' is the last letter in the name.'));

console.log(arrayCoachName)

const arrayCoachNameExtra = arrayCoachName[1][7].concat(' is the last letter in the name.');
console.log(arrayCoachNameExtra)

console.log('i like dogs'.indexOf('dog'));

firstName = "Andrew"
lastName = "Thomas-Worsley"

console.log("My name is ".concat(firstName.concat(' '.concat(lastName))))

let numbers = [1, 2, 3, 4, 5]
console.log(numbers.unshift(6, 7, 9))
console.log(numbers)
console.log(numbers.splice(5).shift())
console.log(numbers)

// function statements get hoisted; function expressions do not