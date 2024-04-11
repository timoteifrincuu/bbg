let smCrys= {
    x: 400,
    y: 300,
    ray: 150,
    directionX: 1,
    directionY: 2,
    speedX: 5,
    speedY: 2,
    
}

function checkLimitsSmCrys()
{
    if(smCrys.x >= tableWidth - smCrys.ray || smCrys.x <= 0 + smCrys.ray)
    {
        smCrys.directionX*=-1;
    }   
    
    if(smCrys.y <= 0 + smCrys.ray)
    {
        smCrys.directionY*=-1;
    }


    //verifies paddle
    if(
        smCrys.y >= smCrys.y - smCrys.ray &&
        smCrys.y <= smCrysy.y + smCrys.width &&
        smCrys.x >=  smCrys.x - smCrys.ray &&
        smCrys.x <=  smCrys.x + smCrys.width + smCrys.ray
    )
    {
        smCrys.directionY *= -1;
    }
    smCrys.y += smCrys.directionY * smCrys.speedY;
}

function smileyFaceCrys(x,y){
         //BODY
    stroke("black");
    fill("black");
    circle(x, y, smCrys.ray*1);

    //EYES
    fill("white");
    stroke("white");
    //eyes
    ellipse(x-(smCrys.ray*2)/5, y-(smCrys.ray * 2)/5, (smCrys.ray * 2)/5, (smCrys.ray * 2)/5);
    ellipse(x+(smCrys.ray*2)/5, y-(smCrys.ray * 2)/5, (smCrys.ray * 2)/5, (smCrys.ray * 2)/5);
    //pupils
    stroke("blue");
    fill("black");
    circle(x - (smCrys.ray * 2) / 5, y - (smCrys.ray * 2) / 5, (smCrys.ray * 2) / 25);
    circle(x + (smCrys.ray * 2) / 5, y - (smCrys.ray * 2) / 5, (smCrys.ray * 2) / 25);

    //MOUTH
    fill("white");
    stroke("white");
    arc(x, y + (smCrys.ray * 2) / 5, (smCrys.ray * 2) / 1.6, (smCrys.ray * 2) / 5, 0, Math.PI);

    //NOSE
    fill("pink");
    circle(x + (smCrys.ray * 2) / 2.5, y + (smCrys.ray * 2) / 10, (smCrys.ray * 2) / 7.14);
    circle(x - (smCrys.ray * 2) / 2.5, y + (smCrys.ray * 2) / 10, (smCrys.ray * 2) / 7.14);
}