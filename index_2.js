const dessert = ['cookies', 'ice cream', 'pie']

console.log(dessert[2])

dessert.push('brownie')

console.log(dessert)

const lastItem = dessert.pop()
console.log(dessert)


lastItem

dessert.push('Cappuccino')

console.log(dessert)
console.log(lastItem)


const user = {
    name: 'Andrew',
    age: 30,
    hasJob: true,
    socialMedia: {
        twitter: "",
        instagram: "",
        facebook: {
            numOfFriends: 1500,
            activeThreads: 5,
            photos: ''
        }
    }
};

console.log(["photos"])


let nbaPlayer = {
    name: 'Joel Embiid',
    age: 27,
    draftYear: 2015,
    team: 'Philadelphia 76ers',
    ppg: 27.5,
    rpg: 11.2,
    apg: 4.3,
    allstarApps: 4
}

console.log(`${nbaPlayer.name}, ${nbaPlayer.age}, ${nbaPlayer.team}`)

nbaPlayer.country = 'Congo';

console.log(`${nbaPlayer.country}`);