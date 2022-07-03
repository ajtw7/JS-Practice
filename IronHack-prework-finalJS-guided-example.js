// JS Final Guided Example - Board Game

/*
    -Multi Dimensional Array (3x3)
    -"Player" Object 
    -Build Functions to move Player
*/

// initialize the PLAYER object

const player = {
    positionX: 1,
    positionY: 1,
    path: [{positionX: 1, positionY: 1}]
};

// initialize the board and 3 rows
// array positioning: X is vertical axis[0], y is horizontal[1]
let board = [
    greenNestedArray = [{
        positionX: 0,
        positionY: 0
    }, {
        positionX: 0,
        positionY: 1
    }, {
        positionX: 0,
        positionY: 2
    }],
    blueNestedArray = [{
        positionX: 1,
        positionY: 0
    }, {
        positionX: 1,
        positionY: 1
    }, {
        positionX: 1,
        positionY: 2
    }],
    burgundyNestedArray = [{
        positionX: 2,
        positionY: 0
    }, {
        positionX: 2,
        positionY: 1
    }, {
        positionX: 2,
        positionY: 2
    }]
];


// define function that takes the "player" and their position-change command (l or r) as params
function placeHorizontal(player, command) {
    if (player.positionY >= 0 && player.positionY < 2) {
        if (command === 'l') {
            // subtract 1 from the "y" property
            player.positionY--;
            // or if we move the player to the right
        } else {
            // add 1 to the y property
            player.positionY++;
        }
        // if we move player to the left
        console.log(`Player has position: x=${player.positionX}, y=${player.positionY}`)

        // record the position moved to on the board
        let newPosition = {positionX: player.positionX, positionY: player.positionY};
        // add new position to the PATH property [ array of objects ]
        player.path.push(newPosition);
    } else {
        console.log("You can't place player outside of the board!")
    }

}

// moving player to the left
placeHorizontal(player, 'l')
console.log(player)

// // moving player to the left
placeHorizontal(player, 'l')
console.log(player)

// moving player to the right
placeHorizontal(player, 'r')
console.log(player)

// // moving player to the right
// placeHorizontal(player, 'r')
// console.log(player)

// placeHorizontal(player, 'l')
// console.log(player)