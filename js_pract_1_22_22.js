//  Array to Object I

const nbaTeams = ['sixers', 'nets', 'sixers', 'lakers', 'celtics', 'magic', 'magic', 'nets'];
const teamCounts = {};

for (let team of nbaTeams) {
    console.log(teamCounts)
    if (teamCounts[team]) {
        teamCounts[team]++;

    } else {
        teamCounts[team] = 1
    }
    
}

console.log(teamCounts)


// ============================================= //

// Converting an Ice Cream flavor array into an object

const flavors = ['vanilla', 'chocolate', 'strawberry', 'vanilla'] //initializing flavors
const flavorCount = {}; //initialize an empty object

for (let flav of flavors) { //loop through the array of flavors
    if (flavorCount[flav]) { //for each tally of 1 flavor, 
        flavorCount[flav]++ // add to its total
    } else { //if a flavor exists just one time
        flavorCount[flav] = 1 // assign it 1 tally.
    }
};

console.log(flavorCount);

// ================================

// Array to an Object  II //

const players = [{
    nombre: 'Kevin Durunt',
    team: 'Brooklyn Nets',
    position: 'SF'
}, {
    nombre: 'Chris Paul',
    team: 'Phoenix Suns',
    position: 'PG'
}, {
    nombre: 'Joel Embiid',
    team: 'Philadelphia 76ers',
    position: 'C'
}, {
    nombre: 'Nikola Jokic',
    team: 'Denver Nuggets',
    position: 'C'
}
];

console.log(players)

const playersMap = {}

for (let player of players) {
    console.log(player.nombre)
    playersMap[player.position] = player;
}

console.log(playersMap.C)
console.log(JSON.stringify(playersMap))


// ===================================================

// Array to an Object III 

const chores = [{
    day: 'Monday',
    assignment: 'Bathroom'
},
{
    day: 'Tuesday',
    assignment: 'Trash'
},
{
    day: 'Wednesday',
    assignment: 'Laundry'
},
{
    day: 'Wednesday',
    assignment: 'Bedroom'
},
{
    day: 'Thursday',
    assignment: 'Kitchen'
}

];

console.log(chores)

const choresByDay = {} //initialize an empty object
for (let chore of chores) { //loop through all chores
console.log(chore.day) // log the day of each chore
if (choresByDay[chore.day]) { // if the object "choresByDay" has a 'day' key
    choresByDay[chore.day].push(chore.assignment) // log the value, which in this case, is the chore (assignment). Therefore, if identical keys exist, each value will be pushed
} else {
    choresByDay[chore.day] = [chore.assignment] //otherwise, an array is return with the assignment
};
};

console.log(choresByDay)

// ====================================================


const flowers = ['lily', 'roses', 'tulips']

function findFlower(flowers) {
for (let flower of flowers) {
    if (flower === 'lily') {
        return 'YAY'
    } else {
        return 'SAD FACE'
    };

};
}
console.log(findFlower(['lily']));  