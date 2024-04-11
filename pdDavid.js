let pdDavid={
    x:tableWidth/2,
    y:520,
    color:"black",
    width:100,
    height:10
}
function createPaddleDavid(){
    fill(pdDavid.color);
    pdDavid.x=mouseX-pdDavid.width/2;
    rect(mouseX-pdDavid.width/2,pdDavid.y,pdDavid.width,pdDavid.height);
}