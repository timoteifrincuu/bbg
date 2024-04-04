
let smTimo = {
    x: 400,
    y: 300,
    directionX: 1,
    directionY: 1,
    speed: 3
};

function checkLimitsSmTimo()
{
    if(smTimo.x >= 800 || smTimo.x <= 0){
        smTimo.directionX*=-1;
    }   
    smTimo.x += smTimo.directionX * smTimo.speed;
    
    if(smTimo.y >= 600 || smTimo.y <= 0)
    {
        smTimo.directionY*=-1;
    }
    smTimo.y += smTimo.directionY * smTimo.speed;

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
