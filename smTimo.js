
let smTimo = {
    x: 400,
    y: 300,
    directionX: 1,
    directionY: 1,
    speedX: 3,
    speedY: 3,
    ray: 15
};

function checkLimitsSmTimo()
{
    if(smTimo.x >= tableWidth - smTimo.ray || smTimo.x <= 0 + smTimo.ray)
    {
        smTimo.directionX*=-1;
    }   
    
    if(smTimo.y <= 0 + smTimo.ray)
    {
        smTimo.directionY*=-1;
    }


    //verifies paddle
    if(
        smTimo.y >= pdTimo.y - smTimo.ray && 
        smTimo.x >=  pdTimo.x + smTimo.ray &&
        smTimo.x <=  pdTimo.x + pdTimo.width - smTimo.ray
    )
    {
        smTimo.directionY *= -1;
    }
    smTimo.y += smTimo.directionY * smTimo.speedY;
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
