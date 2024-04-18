
let smTimo = {
    x: 400,
    y: 450,
    directionX: 1,
    directionY: 1,
    speedX: 5,
    speedY: -5,
    ray: 15
};

function checkLimitsSmTimo()
{
    if(smTimo.x>=800-smTimo.ray||smTimo.x<=0+smTimo.ray)
    {   
        smTimo.directionX*=-1;
    }
    if(smTimo.y<=0+smTimo.ray)
    {
        smTimo.directionY*=-1;
    }
    if(smTimo.y>=600-smTimo.ray){
        smTimo.ray=0;
    }
    if((smTimo.y+smTimo.ray>=pdTimo.y&&smTimo.y+smTimo.ray<=pdTimo.y+pdTimo.height)&&
    (smTimo.x+smTimo.ray>=pdTimo.x&&smTimo.x-smTimo.ray<=pdTimo.x+pdTimo.width))
    {
        smTimo.directionY*=-1;
    }
}

function smileyFaceTimo(x,y) {
    //BODY
    stroke("black");
    fill("black");
    circle(x, y, smTimo.ray*2);

    //EYES
    fill("white");
    stroke("white");
    //eyes
    ellipse(x-(smTimo.ray*2)/5, y-(smTimo.ray * 2)/5, (smTimo.ray * 2)/5, (smTimo.ray * 2)/10);
    ellipse(x+(smTimo.ray*2)/5, y-(smTimo.ray * 2)/5, (smTimo.ray * 2)/5, (smTimo.ray * 2)/10);
    //pupils
    stroke("blue");
    fill("black");
    circle(x - (smTimo.ray * 2) / 5, y - (smTimo.ray * 2) / 5, (smTimo.ray * 2) / 25);
    circle(x + (smTimo.ray * 2) / 5, y - (smTimo.ray * 2) / 5, (smTimo.ray * 2) / 25);

    //MOUTH
    fill("white");
    stroke("white");
    arc(x, y + (smTimo.ray * 2) / 5, (smTimo.ray * 2) / 1.6, (smTimo.ray * 2) / 5, 0, Math.PI);

    //NOSE
    fill("pink");
    circle(x + (smTimo.ray * 2) / 2.5, y + (smTimo.ray * 2) / 10, (smTimo.ray * 2) / 7.14);
    circle(x - (smTimo.ray * 2) / 2.5, y + (smTimo.ray * 2) / 10, (smTimo.ray * 2) / 7.14);
}