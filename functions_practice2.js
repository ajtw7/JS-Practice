// CLOSURES!!!! - Tricky

function createAddFn(n1) {
    return function(n2) {
        return n1 + n2;
    }
}

var addFive = createAddFn(5)
console.log(addFive(4))

var addThree = createAddFn(3)
console.log(addThree(5))



// String Methods

const cookies = "Cookies are great!"

console.log(cookies.length)

console.log(cookies.indexOf('o'))

console.log(cookies.slice(3))

console.log(cookies.toUpperCase())
console.log(cookies.toLowerCase())

console.log(cookies.concat(' sometimes'))

console.log(cookies.replace('great', 'great sometimes'))

console.log(cookies.split(" ")); 

// NO space will split each character into its OWN index. 
// 1 SPACE will split each word


// ===================================================
// Number Methods

const num = 997.98423178;

// to string
console.log(num.toString() + 101)

// to fixed
console.log(num.toFixed(2));

// Math.min, Math.max
console.log(Math.min(12, 222, 7, 523, 543543, ))

// Math.floor, Math.ceil
console.log(Math.floor(num));
console.log(Math.ceil(num));
// console.log(parseInt(995.38432));  always returns a number (integer)

//===============================================================

// Array Methods
let nums = [7, 24, 30]

// concat
const numsTwo = [4, 5, 6];
console.log(nums.concat(numsTwo).concat(nums));


// slice
console.log(nums.slice(1, 3))

// pop, push
nums.push(46)
console.log(nums.slice(1, 3))
console.log(nums);

nums.pop()
console.log(nums)

// shift & unshift

//  splice

console.log(nums)

const deleted = nums.splice(1, 2, 40, 45, 76, 98, 33);
console.log(deleted)
// use SLICE to medify instead of SPLICE; first number is slicing(INDEX) start point; 
// 2nd number is the number of values to delete, 
// the remaining are what will replace

console.log(nums)


// higher order

//  find

//  some, every

//  forEach

//  map

//  filter

//  sort