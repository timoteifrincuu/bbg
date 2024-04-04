
function setup() {
    createCanvas(800, 600);
}

function draw() {    

    
    background(200);

    smileyFaceDavid(smDavid.x=smDavid.x+(smDavid.directionX*smDavid.speedX),smDavid.y=smDavid.y+(smDavid.directionY*smDavid.speedY));
    smileyFaceTimo(smTimo.x=smTimo.x+(smTimo.directionX*smTimo.speedX), smTimo.y=smTimo.y+(smTimo.directionY*smTimo.speedY));
    smileyFaceCrys(smCrysX=smCrysX+directionCrysX, smCrysY=smCrysY+directionCrysY);    
        
    checkLimitsSmDavid();
    checkLimitsSmTimo();
    checkLimitsSmCrys();

}
