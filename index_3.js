let num = 0;
let firstName = 'Andrew';

if (num === 1 || firstName === 'Andre') {
    console.log('This is true');
} else {
    console.log('This is false');
}


let secondNum = 77;
let lastName = 'Thomas-Worsley';

let condition1 = secondNum === 77 && lastName !== 'Worsley';

if (condition1) {
    console.log('This is true')
} else {
    console.log('This is false')
}

let hasShot = true;
let age = 14;

if (age <= 16 || hasShot === false) {
console.log('Not So Great!'); 
} else {
    console.log('Great');
}

let digit = true;

if (typeof digit === 'number') {
    console.log('Its a number');
} else {
    console.log('Its something else');
}

console.log(digit)

food = ['Bread', 'Fish', 'Chicken']

console.log(Array.isArray(food)); 


if (Array.isArray(food) && typeof digit !== 'boolean') {
    console.log('its an array and digit is a boolean');
} else {
console.log('otherwise')
}

console.log(isNaN())