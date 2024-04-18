
let bricks = []

const bricksRows = 1
const bricksCols = 1
const rowBricksNumber = 6



function initBricks(){
    for (let i = 0.5; i < bricksRows*rowBricksNumber; i++) {
        bricks.push({
            hit: false,
            x: i*80,
            y: 20,
            color: "brown",
            width: 70,
            heigth: 40
        })
        
    }
}

function createBricks(){
    
    bricks.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.heigth);
    });
}