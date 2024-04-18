let pdCrys={
    x: tableWidth/2,
    y: 500,
    color: "cyan",
    width: 70,
    height: 10
}

function createPaddleCrys(){
    fill(pdCrys.color)
    // stoke(255, 165, 0)
    pdCrys.x = mouseX-pdCrys.width/2;
    rect(mouseX-pdCrys.width/2, pdCrys.y, pdCrys.width, pdCrys.height)
}
