let pdCrys={
    x: tableWidth/2,
    y: 500,
    color: 0,
    width: 70,
    height: 10
}

function createPaddle(){
    fill(pdCrys.color)
    pdCrys.x = mouseX-pdCrys.width/2;
    rect(mouseX-pdCrys.width/2, pdCrys.y, pdCrys.width, pdCrys.height)
}