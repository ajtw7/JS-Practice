function welcome(myName) {
    console.log(`Hi ${myName}! It's Wonderful to Meet You!`);
}

welcome('Karen')


function printToTwenty() {
    let printRoll = 20;

    for (let i = 0; i <= printRoll; i++) {
        console.log(i)
    }
}

printToTwenty();

// ------------------------------------------------------

/* 
the same 'printToTwenty' function from above that 
will repeat the same behavoir, accept with any argument
 */

function printNumbers(num) {


    for (let i = 0; i <= num; i++) {
        console.log(i)
    }
    return
}

printNumbers();


// ---------------------------

let ironCities = ['Amsterdam', 'Barcelona', 'Berlin', 'Lisbon', 'Madrid', 'Mexico City', 'Miami', 'Paris', 'Sao Paulo'];
let drewsFavCities = ['New York City', 'Philadelphia', 'Barcelona', 'London', 'Los Angeles', 'Washington D.C.']

function printArrElements(someArr) {
    for (let item of someArr) {
        console.log(item)
    }
    return
}
drewsFavCities.push('Miami')

// printArrElements(ironCities)
printArrElements(drewsFavCities)

// -----------------------

function printEvens(someArr) {
    console.log(someArr)
    for (let i = 0; i < someArr.length; i++) {
        if (i % 2 !== 0)
            console.log(someArr[i])
        }
        return
    }

printEvens(ironCities)
// printEvens(drewsFavCities)