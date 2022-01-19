var sumMultiples = function (n) {
    var counter = 0
    var sum = 0
    while (n--) {
        if (n % 3 === 0 || n % 5 === 0) {
            counter++
            sum += n;
        
        }
    }
    return sum;
}
console.log(sumMultiples(200))