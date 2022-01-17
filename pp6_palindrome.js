function isPalindrome(str) {
    // Step 1: use the split method to return a new array
    var splitString = str.split('');
    // Step 2: use the reverse method on the new array
    var reverseArray = splitString.reverse();
    // Step 3: use the join method to form the reversed letters into a new string
    var joinArray = reverseArray.join("");
    // Step: 4 return the reversed string
    return joinArray;
}

console.log(isPalindrome('Samantha'))


// =========================================== //

var isPalindrome = (str) => {
    // Step 1: split
    // step 2: reverse
    // step 3: join
    if (str.split('').reverse().join('') === str) {
        return true
    } else {
        return false
    };
};

console.log(isPalindrome(''))


// Notes: Arrays will have MORE methods that strings


// ====================================
// Advanced Tech Interview version

var isPalindrome = (str) => {
    for (let i = 0; i < str.length; i++) {
        let rightIndex = str.length - 1 - i;
        if (str[i] !== str[rightIndex]) {
            return false;
        }
    }
    return true
}

console.log(isPalindrome('eye'))