const nums = [2, 4, 6]
const tripled = [] //why is this an empty array?

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    tripled.push(nums[i] * 3);
}

console.log()


// ================================================

const nums2 = [2, 4, 11]
const quad = [];

for (let i = 0; i < nums2.length; i++) {
    console.log(nums2[i]);
    quad.push(nums2[i] * 4);
}

console.log(quad)

const nums3 = [4, 7, 9]
const double = []

for (let i = 0; i < nums.length; i++) {
    nums3[i] = nums3[i] * 3;
    console.log(nums3);
}


// =====================================================

const firstNames = ['Andrew', 'Samantha', 'Chris']

for (let fname of firstNames) {
    console.log(fname)
}

const teams = ['Grizz', 'Warriors', 'Magic']

for (const team of teams) {
    console.log(team)
    if (team === 'Grizz') {
        console.log('awesome')
    } else {
        console.log('damn')
    }
} 

// Const can be interchanged with 'Let' in FOR loops


// ================================

const state = {
    capital: 'New York',
    coast: 'East'
}

for (let key in state) {
    console.log(key);
}

const women = {
    nombre: 'Samantha',
    age: 31,
    ethnicity: 'Black'
}

for (let key in women) {
    console.log(women[key]);
}

// ===================================
// only has the middle condition of a "for" loop

i = 0

while (i < 20) {
    i++
    console.log(i)
}


let num = 7;
counter = 0

while (num < 10000) {
    counter++;
    num *= 2;
}


console.log(counter)

friends = ['Geordi', 'Ariel', 'Dullah'];
console.log(friends.indexOf('Ariel'))

while (true) {
    const friend = friends.pop();
    console.log(friend)
    if (friend[friend.length - 1] === 'h') {
        console.log(`Found ${friend}!`);
        break
    }
}

