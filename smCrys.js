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
    if(smCrys.x>=tableWidth - smCrys||smCrys.x <= 0+smCrys.ray)
    {   
        smCrys.directionX *= -1;
    }
    smCrys.x +=smCrys.directionX * smCrys.speedX;

    if(smCrys.y>=tableWidth - smCrys.ray||smCrys.y<=0+ smCrys.ray)
    {
        smCrys.directionY*=-1;
    }
    smCrys.y += smCrys.directionY * smCrys.speedY;
}

function smileyFaceCrys(x,y){
     // BODY
  fill("Orange");
  stroke("black");
  circle(x, y, smCrys.ray * 2);

  // EYE PUPILS
  stroke("black");
  fill("black");
  circle(x - (smCrys.ray * 2) / 5, y - (smCrys.ray * 2) / 5, (smCrys.ray * 2) / 25);
  circle(x + (smCrys.ray * 2) / 5, y - (smCrys.ray * 2) / 5, (smCrys.ray * 2) / 25);

  // MOUNTH
  stroke("green");
  fill("gray");
  arc(x, y + (smCrys.ray * 2) / 5, (smCrys.ray * 2) / 3, (smCrys.ray * 2) / 2, 0, Math.PI);

  // CHEEKS
  stroke("darkred");
  fill("red");
  circle(x + (smCrys.ray * 2) / 2.5, y + (smCrys.ray * 2) / 10, (smCrys.ray * 2) / 7.14);
  circle(x - (smCrys.ray * 2) / 2.5, y + (smCrys.ray * 2) / 10, (smCrys.ray * 2) / 7.14);
}