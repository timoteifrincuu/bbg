
let smTimo = {
    x: 400,
    y: 450,
    directionX: 1,
    directionY: 1,
    speedX: 2,
    speedY: -2,
    ray: 20
};

function checkLimitsSmTimo()
{
    //verifies paddle
    if(
        smTimo.y >= pdTimo.y - smTimo.ray && 
        smTimo.y <= pdTimo.y + pdTimo.heigth &&
        smTimo.x >=  pdTimo.x + smTimo.ray &&
        smTimo.x <=  pdTimo.x + pdTimo.width - smTimo.ray
    )
    {
        smTimo.directionY *= -1;
        smTimo.directionX *= -1; // Add this line to reverse the horizontal direction as well
    }
    smTimo.y += smTimo.directionY * smTimo.speedY;
    smTimo.x += smTimo.directionX * smTimo.speedX; // Add this line to update the x position

    //if smTimo goes below
    if(smTimo.y >= tableHeigth-smTimo.ray)
    {
        smTimo.ray = 0;
    }

    //if smTimo goes above, beyond the left boundary, or beyond the right boundary
    if(smTimo.y <= smTimo.ray || smTimo.x <= smTimo.ray || smTimo.x >= tableWidth-smTimo.ray)
    {
        smTimo.directionY *= -1;
        smTimo.directionX *= -1;
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
