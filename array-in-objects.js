let olympicRecords = {
  athletics100Men: "Justin Gatlin",
  athleticsLongJumpMen: "Mike Powell",
};

console.log(olympicRecords['athleticsLongJumpMen']); // Bracket Notation
console.log(olympicRecords.athletics100Men); // Dot Notation

olympicRecords.swimming200Men = 'Michael Phelps';
console.log(olympicRecords)

olympicRecords.athletics800Men = 'David Rudesha';
console.log(olympicRecords)

olympicRecords.athletics100Men = 'Usain Bolt';
console.log(olympicRecords.athletics100Men)

olympicRecords.doubleOllie = 'Chris Chann';
console.log(olympicRecords.doubleOllie)

delete olympicRecords.doubleOllie
console.log(olympicRecords)

let allKeys = Object.keys(olympicRecords);
console.log(allKeys)


for (let rec in olympicRecords) {
  console.log(olympicRecords[rec])
}

// -----------------------------------------------------


let product = {
  name: 'headphones',
  price: 120,
  doesItWork: false,
  previousOwner: 'Bob'
}


for (let key in product) {
  console.log(`${key}: ${product[key]}`)

}
delete product.previousOwner

product.doesItWork = 'true';

if (product.price > 100) {
  product.discountPercentage = 10;
}
product.price -= product.price * (product.discountPercentage / 100)

if ("discountPercentage" in product) {
  console.log(`We got some ${product.name} on sale for just $${product.price}, that's ${product.discountPercentage}% off!`)
}

// ------------------------------------------


user = {
  name: 'Ada',
  surname: 'Lovelace',
  age: 35,
  address: {
    country: "England"
  }
}

console.log(user.address.country)

function printBio(user) {

  return `This is ${user.name} ${user.surname} from ${user.address.country}.`

}

console.log(printBio(user))


const athletes = [{
    fname: 'Tyreek',
    lname: 'Hill',
    team: 'Miami Dolphins'
  },

  {
    fname: 'Davonte',
    lname: 'Adams',
    team: 'Las Vegas Raider'
  }
]

console.log(athletes[0].team)

athletes.push({
  fname: 'A.J.',
  lname: 'Brown',
  team: 'Philadelphia Eagles'
})

console.log(athletes)

athletes.push({
  fname: 'Dak',
  lname: 'Prescott',
  team: 'Dallas Cowboys',
  endorsements: ['Campbells', 'Sleep Mattress']
})

console.log(athletes[3].endorsements)