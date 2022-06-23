// Objects in Objects

let athlete = {
    fullName: 'Andrew Thomas-Worsley',
    college: 'Villanova',
    birthplace: 'Philadelphia',
    height: '6,5"',
    position: 'SG',
    draftYear: '2020',
    Team: 'GSW',
    offStats: {
        ppg: 14.7,
        apg: 3.2,
        rpg: 4.4,
        shootingPer: 47.5
    },
    defStats: {
        spg: 1.4,
        bpg: 0.5,
    }
}

console.log(athlete.offStats.shootingPer);


// -------------------------------------------


let bikes = [{
    brand: 'Golden Cycles',
    year: 2022,
    isFixedGear: true,
    specs: {
        wheelColor: 'Red',
        frame: 54,
        assembledOnDelivery: false,
    }
}]

console.log(bikes[0].specs)

const sportsTeams = [
    ['Eagles', 'Sixers', 'Flyers', 'Phillies'],
    ['Nets', 'Knicks', 'Yankees', 'Mets', 'Rangers', 'Islanders'],
    ['Celtics', 'Patriots', 'Red Sox']
];

console.log(sportsTeams[0].push('Villanova'))
console.log(sportsTeams[0])
console.log(sportsTeams)


// ------------------------------------------------------------------

let products = [{
        name: 'iPhone',
        price: 799.99
    },
    {
        name: 'Samsung Galaxy S10',
        price: 900.0
    }
]

products.push({
    name: 'Motorola Razr',
    price: 250.00
})
products.unshift({
    name: 'test',
    price: 'test'
})
console.log(products[0])

// -------------------------------------------

let course = {
    name: 'Web Development',
    type: ['full-time', 'part-time'],
    topics: ['HTML/CSS & Responsive Design', 'JavaScript', 'MongoDB', 'Node', 'Express', 'React']

}

console.log(`This August I will be attending IronHack's ${course.type[0]} 
${course.name} course, learning topics I am unfamiliar with, such as ${course.topics[4]}. `)

console.log(course.topics.values()) 