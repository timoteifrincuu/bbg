
let smileyFaceTimo = {
    x: 400,
    y: 300,
    directionX: 4,
    directionY: 4
}

function checkLimitsSmTimo()
{
    if(smileyFaceTimo.x>=800-20||smileyFaceTimo.x<=0+20)
    {   
        smileyFaceTimo.directionX*=-1;
    }
    if(smileyFaceTimo.y>=600-20||smileyFaceTimo.y<=0+20)
    {
        smileyFaceTimo.directionY*=-1;
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
