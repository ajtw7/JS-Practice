;


// Original Answer

function getInitials(fullName) {
    var seperated = fullName.split(' ');
    var firstChar = seperated[0][0];
    var lastChar = seperated[1][0];
    var initials = `${firstChar}.${lastChar}`;
    return initials.toUpperCase();
}

// =============================================================


// Refactored Answer

getInitials = fullName => {
    var seperated = fullName.split(' ');
    return `${seperated[0][0]}.${seperated[1][0]}`.toUpperCase();
}

console.log(getInitials('christoper thomas-worsley'));