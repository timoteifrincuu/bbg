let smDavid={
    x:400,
    y:300,
    directionX:1,
    directionY:1,
    speedX:10,
    speedY:10,
    ray:25
};
function smileyFaceDavid(x,y) {
    //head
    stroke("black");
    fill("yellow");
    circle(x, y, smDavid.ray*2);
    //eyes
    stroke("black");
    fill("pink");
    ellipse(x-smDavid.ray/(25/15), y-smDavid.ray/(25/18), smDavid.ray/2.5, smDavid.ray/5);
    ellipse(x+smDavid.ray/5, y-smDavid.ray/(25/18), smDavid.ray/2.5, smDavid.ray/(25/7));
    stroke("cyan");
    circle(x-smDavid.ray/(25/15), y-smDavid.ray/(25/18), smDavid.ray/12.5);
    circle(x+smDavid.ray/5, y-smDavid.ray/(25/18), smDavid.ray/12.5);
    //mouth
    stroke("black");
    fill("grey")
    arc(x-smDavid.ray/5, y+smDavid.ray/12.5, smDavid.ray/(25/30), smDavid.ray/(25/15), -3.14, Math.PI);
    stroke("black");
    fill("white")
    arc(x-smDavid.ray/(25/9), y-smDavid.ray/(25/4), smDavid.ray/(25/7), smDavid.ray/(25/7), 0, Math.PI);
    arc(x-smDavid.ray/25, y-smDavid.ray/(25/4), smDavid.ray/(25/7), smDavid.ray/(25/7), 0, Math.PI);
}
function checkLimitsSmDavid()
{
    if(smDavid.x>=800-smDavid.ray||smDavid.x<=0+smDavid.ray)
    {   
        smDavid.directionX*=-1;
    }
    if(smDavid.y>=600-smDavid.ray||smDavid.y<=0+smDavid.ray)
    {
        smDavid.directionY*=-1;
    }
}