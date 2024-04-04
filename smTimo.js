let smileyFaceTimoX = 400;
let smileyFaceTimoY = 300;
let directionX = 4;
let directionY = 4;

function checkLimitsSmTimo()
{
    if(smileyFaceTimoX>=800||smileyFaceTimoX<=0)
    {   
        directionX*=-1;
    }
    if(smileyFaceTimoY>=600||smileyFaceTimoY<=0)
    {
        directionY*=-1;
    }
}

function smileyFaceTimo(x,y) {
    //BODY
    stroke("black");
    fill("black");
    circle(x, y, 50);

    //EYES
    fill("white");
    stroke("white");
    //eyes
    ellipse(x-10, y-10, 10, 5);
    ellipse(x+10, y-10, 10, 5);
    //pupils
    stroke("blue");
    fill("black");
    circle(x-10, y-10, 2);
    circle(x+10, y-10, 2);

    //MOUTH
    fill("white");
    stroke("white");
    arc(x, y+10, 40, 10, 0, Math.PI);

    //NOSE
    fill("pink");
    circle(x, y, 10);
}