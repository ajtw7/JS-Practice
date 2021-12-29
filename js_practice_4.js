const myFirstName = 'Andrew';

for (let letter of myFirstName) {
    console.log(letter);
}

// =====================================================

for (let i = 0; i < myFirstName.length; i++) {
    console.log(i)
}


let myFamily = ['Karen', 'Christopher', 'Gilda', 'Gary', 'Margo', 'Andrew', 'Myrtle'];

const surname = 'Thomas';

for (const member of myFamily) {
    console.log(member, surname)
}

for (const member of myFamily) {
    console.log(member, surname)
    if (member[0] === 'G') {
        console.log(`The Wonderful ${member}`, `${surname}!`);
        break
    }
}


let i = '';

while (i.length < 10) {
    i += 'A';
    console.log(i)
}

const computer = {
    ram: '8GB',
    cpu: 'quad core',
    storage: '1TB'
}

for (const key in computer) {
    console.log(`${key} spec is ${computer[key]}`)
}

const names = ['Andrew', 'Thomas-Worsley'];

for (let i = 0; i < names.length; i++) {
    console.log(i);
}



while (i < 2) {
    console.log(i);
}