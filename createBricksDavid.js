let bricksDavid = []

const marginDavid = 10;
const distBetwBricksDavid = 10;

const bricksRowsDavid = 3
const rowBricksNumberDavid = 9

const brickWidthDavid = Math.floor(
    (tableWidth -
         marginDavid * 2 - 
        (rowBricksNumberDavid -1) * distBetwBricksDavid)/
        rowBricksNumberDavid
);

function initBricksDavid(){
    let x= marginDavid;
    for (let i = 0; i < bricksRowsDavid*rowBricksNumberDavid; i++) {
        const row = Math.floor(i / rowBricksNumberDavid) + 1;
        
        x = x + brickWidthDavid + distBetwBricksDavid;
        if(i % rowBricksNumberDavid == 0) x = marginDavid;
        
        bricksDavid.push({
            hit: false,
            x,
            y: row * 30,
            color: "gold",
            width: brickWidthDavid,
            heigth: 20,
            row,
        });
        
    }
}

function createBricksDavid(){
    
    bricksDavid.forEach(brickDavid => {
        fill(brickDavid.color);
        rect(brickDavid.x, brickDavid.y, brickDavid.width, brickDavid.heigth);
    });
}