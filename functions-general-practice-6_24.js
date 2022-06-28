let randomNumbers = [0, 1, 7, 5, 9, 22, -19, 7.9]

function calcSum(nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    console.log(sum)
    return `Your total today is: $${sum}.`

};

console.log(calcSum(randomNumbers))