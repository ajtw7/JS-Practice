const countVowels = str => {
    var counter = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter))
            counter++
    }
    return counter
}

console.log(countVowels('Samantha'))