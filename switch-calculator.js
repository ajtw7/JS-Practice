// -------------------------------------------

function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '/':
            result = num1 + num2;
            break
    }
    // response = `${num1} ${operator} ${num2} = ${result}`;
    return result

}

console.log(calculator(7, 4, '*'))