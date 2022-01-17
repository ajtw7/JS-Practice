// repeating a string n times using the repeat method
const repeatRepeat = (string, increment) => {
    if (increment > 0) {
        return string.repeat(increment);
    }
}

console.log(repeatRepeat('Hell0 ', 6));

// ==================================================== //

// repeating a string (n) times using the decrement operator
const repeatTwo = (str, counter) => {
    var newStr = "";
    while (counter--) {
        newStr += str
    }
    return newStr
}

console.log(repeatTwo('A', 5))