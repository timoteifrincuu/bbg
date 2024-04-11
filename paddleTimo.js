let pdTimo = {
    x:tableWidth/2, 
    y:550,
    color: "red",
    width: 90,
    height: 10
    
}

function createPaddle(){
    fill(pdTimo.color)
    pdTimo.x = mouseX-pdTimo.width/2;
    rect(mouseX-pdTimo.width/2, pdTimo.y, pdTimo.width, pdTimo.height)
}