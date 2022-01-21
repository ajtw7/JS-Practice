function likes(names) {
    let likesItem = '';
    // if no one likes it - "no one likes this"
    if (names.length < 1) {
        console.log(likesItem)
        return likesItem = (`no one likes this`);
    } else {
        if (names.length < 2) {
            return likesItem = (`${names[0]} likes this`);
        } else {
            if (names.length <= 2) {
                console.log(`${names[0]} and ${names[1]} likes this`);
                return likesItem = `${names[0]} and ${names[1]} like this`;
            } else {
                if (names.length <= 3) {
                    console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
                    return likesItem = `${names[0]}, ${names[1]} and ${names[2]} like this`;
                } else {
                    if (names.length >= 4) {
                        console.log(`${names[0]}, ${names[1]} and ${names.length - 2} others like this`)
                        return (`${names[0]}, ${names[1]} and ${names.length - 2} others like this`);
                    }
                };
            };
        };
    };
    return likesItem
};

console.log(likes(['Andrew', 'Sexyface', 'Luka', 'Zeus', 'ghfhjnh', 'ghfgfhgf']))