function calc(num1, num2, op) {

    /* Validators and conditions: 
        makes sure user always passes three args */
    console.log('Please provide both numbers and operator!');
    if (!num1 || !num2 || !op) {
        return;;
    }

    // makes sure user passes numeric values
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Please add a numeric value only!')
        return;
    }

    // make sure the user passes one of the valid operators (+, -, *, /)
    if (op !== '+' && op !== '-' && op !== '*' && op !== '/') {
        console.log('Please provide a valid operator.')
        return;
    }

    /* initialize a variable that will hold the result */
    let result;

    switch (op) {
        case "+":
            result = num1 + num2;
            break

        case "-":
            result = num1 - num2;
            break

        case "/":
            result = num1 / num2;
            break

        case "*":
            result = num1 * num2;
            break

            // default:
            //     return "Please select two numbers and an operator."

    }
    return result
}

console.log(calc(5, 6, '*'))