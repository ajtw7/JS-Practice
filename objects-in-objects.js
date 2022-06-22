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