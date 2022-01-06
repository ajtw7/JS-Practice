const nums = [1, 2, 3]

// find
// want to return true or false
const found = nums.find(num => {
    console.log(num)
    if (num > 2) {
        return true;
    }
});

console.log(found)

// sum
// want to return true of false
const ages = [14, 21, 13, 42, 50]
const hasMinors = ages.some(age => {
    console.log(age);
    if (age < 21) {
        return true;
    }

})
console.log(hasMinors);

// forEach
ages.forEach(age => {
    console.log(age)

})

ages.forEach((age, index, arr) => {
    console.log(age, index);
})

// map
// most useful; will always create a copy of Original array
// anything RETURNED is placed in an array
const newAges = ages.map(age => age / 2);
console.log(newAges)


console.log(newAges);

const newerAges = newAges.map(newerAge => {
    console.log(newerAge);
    if (newerAge < 10)
        return newerAge;

})

console.log(newerAges);

// =====================================

//  filter

const jerseyNumbers = [7, 45, 24, 83, 9];

const filteredJerseyNumbers = jerseyNumbers.filter(jerseyNumbers => {
    if (jerseyNumbers > 1) {
        return true
 }
})

console.log(filteredJerseyNumbers);


// sort (does work in place); IOW: it will copy

jerseyNumbers.sort()
console.log(jerseyNumbers);

ages.sort()
console.log(ages)

filteredJerseyNumbers.sort()
console.log(filteredJerseyNumbers)


// reduce

const result = ages.reduce((sum, age) => {
    console.log(sum, age);
    return 2;
})