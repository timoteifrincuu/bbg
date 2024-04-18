let smCrys= {
    x: 400,
    y: 300,
    ray: 30,
    directionX: 1,
    directionY: 2,
    speedX: 5,
    speedY: 2,
    
}

function checkLimitsSmCrys()
{
    if(smCrys.x>=800-smCrys.ray||smCrys.x<=0+smCrys.ray)
    {   
        smCrys.directionX*=-1;
    }
    if(smCrys.y<=0+smCrys.ray)
    {
        smCrys.directionY*=-1;
    }
    if(smCrys.y>=600-smCrys.ray){
        smCrys.ray=0;
    }
    if((smCrys.y+smCrys.ray>=pdCrys.y&&smCrys.y+smCrys.ray<=pdCrys.y+pdCrys.height)&&
    (smCrys.x+smCrys.ray>=pdCrys.x&&smCrys.x-smCrys.ray<=pdCrys.x+pdCrys.width))
    {
        smCrys.directionY*=-1;
    }
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