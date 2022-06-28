const phone = {
    brand: 'Apple',
    type: 'iPhone',
    model: 'X',
    specs: {
        capacity: '256GB',
        size: {
            height: '5.65 inches',
            width: '2.79 inches'
        }
    },
    chip: ['bionic', 'neural engine', 'embedded motion processor']
};

console.log(phone)


function getPhoneDetails (thePhone) {
    const phoneDetails = `${thePhone.type} ${thePhone.model} by ${thePhone.brand}
  Characteristics:
  1 - Capacity  
    
    `

}