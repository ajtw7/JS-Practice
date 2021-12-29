const numOfWeeks = 0;

// if (typeof numOfWeeks === 'number'){
//   let areNoWeeks = numOfWeeks =
// }









let carMake = ['Honda', 'Toyota', 'Mercedes Benz'];

if (Array.isArray(numOfWeeks)) {
    console.log('True');
} else {
    console.log('false')
}

const isCarMake = Array.isArray(carMake);

console.log(isCarMake)

arrayTest = [1, 2, 3]

console.log(typeof arrayTest);

console.log(Array.isArray(arrayTest))

let numberTrick = Boolean();

console.log(numberTrick)

console.log(typeof numberTrick)



// =================================================


const myName = 'Andrew Thomas-Worsley';

for (let i = 0; i < myName.length; i++) {
    console.log(myName[i]);
}

const siblingsName = 'Christopher'

for (let i = 0; i < siblingsName.length; i++) {
    console.log(siblingsName[i]);
}

// +++++++++++++


const nums = [2, 4, 6]
const tripled = [] //why is this an empty array?

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    tripled.push(nums[i] * 3);
}

console.log()