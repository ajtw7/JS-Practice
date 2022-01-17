// My code

var countOdd = (n) => {
    // step 1 establish a counter
    var counter = 0;
    // step 2 loop through the counter
    while (n--) {
        // step 3 add to counter IF number is odd (not divisible by 2)
        if (n % 2 === 1) {
            return counter += n;
        }
    }
    return counter;

    // step 4 return counter
}

console.log(countOdd(7))

// Solution


var countOdd = (n) => {
    // step 1 establish a counter
    var counter = 0;
    // step 2 loop through the counter
    while (n--) {
        // step 3 add to counter IF number is odd (not divisible by 2)
        if (n % 2 === 1) {
            counter++; //adds 1 to the counter (increment)
        }
    }
    return counter;

    // step 4 return counter
}

// Simplest solution

console.log(countOdd(6))

let countOddTwo = (n) => {
    return Math.floor(n / 2);
}
console.log(countOddTwo(21))