let brkTimo = {
    x: 100,
    y: 100,
    color: "brown",
    width: 70,
    heigth: 15
}

function createBrick(){
    fill(brkTimo.color)
    rect(brkTimo.x, brkTimo.y, brkTimo.width, brkTimo.heigth)
}