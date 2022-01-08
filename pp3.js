const sumOfPositive = nums => {
    var sum = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            sum += nums[i]
        }

    }
    return sum
};

console.log(sumOfPositive([-18,4,5,2,5]))



// is the number positive? if so, add to the sum

//  otherwise, skip the number

//  return the sum