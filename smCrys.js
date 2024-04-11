let smCrys= {
    x: 400,
    y: 300,
    directionX: 1,
    directionY: 2,
    speedX: 5,
    speedY: 2,
    ray: 50
}

function checkLimitsSmCrys()
{
    if(smCrys.x>=800-50||smCrys.x<=0+50)
    {   
        smCrys.directionX*=-1;
    }
    if(smCrys.y>=600-50||smCrys.y<=0+50)
    {
        smCrys.directionY*=-1;
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