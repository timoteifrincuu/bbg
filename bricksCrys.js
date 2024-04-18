let bricksCrys = []

const marginCrys = 10;
const distanceBetweenBricksCrys = 10;

const bricksRowsCrys = 3;
const rowBricksNumberCrys = 7;

const brickWidthCrys = Math.floor(
    (tableWidth -
        marginCrys * 2 -
            (rowBricksNumberCrys - 1) * distanceBetweenBricksCrys) /
        rowBricksNumberCrys
);

function initBricksCrys(){
    let x = marginCrys;
    for (let i = 0; i < bricksRowsCrys*rowBricksNumberCrys; i++) {
        const row = Math.floor(i / rowBricksNumberCrys) + 1;

        x = x + brickWidthCrys + distanceBetweenBricksCrys;
        if (i % rowBricksNumberCrys == 0) x = marginCrys;

        bricksCrys.push({
            hit: false,
            x,
            y: row * 35,
            color: "black",
            width: brickWidthCrys,
            heigth: 20,
            row,
        });
    }
}

function createBricksCrys(){
    bricksCrys.forEach((brick) => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.heigth);
    });
}