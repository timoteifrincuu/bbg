let smDavid={
    x:400,
    y:300,
    directionX:1,
    directionY:1,
    speedX:5,
    speedY:3
};
function smileyFaceDavid(x,y) {
    //head
    stroke("black");
    fill("yellow");
    circle(x, y, 50);
    //eyes
    stroke("black");
    fill("pink");
    ellipse(x-15, y-18, 10, 5);
    ellipse(x+5, y-18, 10, 7);
    stroke("cyan");
    circle(x-15, y-18, 2);
    circle(x+5, y-18, 2);
    //mouth
    stroke("black");
    fill("grey")
    arc(x-5, y+2, 30, 15, -3.14, Math.PI);
    stroke("black");
    fill("white")
    arc(x-9, y-4, 7, 7, 0, Math.PI);
    arc(x-1, y-4, 7, 7, 0, Math.PI);
}
function checkLimitsSmDavid()
{
    if(smDavid.x>=800-25||smDavid.x<=0+25)
    {   
        smDavid.directionX*=-1;
    }
    if(smDavid.y>=600-25||smDavid.y<=0+25)
    {
        smDavid.directionY*=-1;
    }
}