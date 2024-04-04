let smDavidX=400;
let smDavidY=300;
let directionDavidX=22;
let directionDavidY=55;
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
    if(smDavidX>=800||smDavidX<=0)
    {   
        directionDavidX*=-1;
    }
    if(smDavidY>=600||smDavidY<=0)
    {
        directionDavidY*=-1;
    }
}