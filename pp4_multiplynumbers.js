var multiplyNumbers = function(num1, num2) {
    let product = num1;
    for (let i = 0; i < num2 - 1; i++) {
        product += num1;
    }
    return product
}

console.log(multiplyNumbers(50,5))






