let smCrysX=400;
let smCrysY=300;
let directionCrysX=1;
let directionCrysY=1;

function checkLimitsSmCrys()
{
    if(smCrysX>=800-50||smCrysX<=0+50)
    {   
        directionCrysX*=-1;
    }
    if(smCrysY>=600-50||smCrysY<=0+50)
    {
        directionCrysY*=-1;
    }
}

function smileyFaceCrys(x,y){
    //head
    stroke("black");
    fill("orange");
    circle(x, y, 100);
    //eyes
    stroke("cyan");
    fill("cyan");
    ellipse(x-15, y-18, 10, 5);
    ellipse(x+5, y-18, 10, 7);
    stroke("cyan");
    circle(x-15, y-18, 2);
    circle(x+5, y-18, 2);
    //mouth
    stroke("black");
    fill("grey")
    arc(x-5, y+2, 30, 15, -3.14, Math.PI);
    stroke("blue");
    fill("white")
    arc(x-9, y-4, 7, 7, 0, Math.PI);
    arc(x-1, y-4, 7, 7, 0, Math.PI);
}