
function milesToKilometers(miles) { //if no number is entered for argument, default should be 1.60934
    const km = miles * 1.60934;
    if (typeof miles !== 'number') {
        return 1.60934
    } else {
        console.log(`${km}`);
    }
    return
}
// --------------------------------------------------------------------------------------------------
milesToKilometers()

function milesToKilometers(miles) { //if no number is entered for argument, default should be 1.60934
    const km = miles * 1.60934;
    if (typeof miles !== 'number') {
        return 1.60934
    } else {
        return km;
    }

}

milesToKilometers()