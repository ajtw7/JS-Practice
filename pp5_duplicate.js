const repeatRepeat = (string, increment) => {
    if (increment > 0) {
        return string.repeat(increment);
    }
}

console.log(repeatRepeat('Hello', 2));