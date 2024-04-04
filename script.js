
function setup() {
    createCanvas(800, 600);
}

function draw() {
    
    background(200);

    smileyFaceDavid(smDavidX=smDavidX+directionDavidX,smDavidY=smDavidY+directionDavidY);
    smileyFaceTimo(smTimo.x, smTimo.y);
    smileyFaceCrys(smCrysX=smCrysX+directionCrysX, smCrysY=smCrysY+directionCrysY);    
        
    checkLimitsSmDavid();
    checkLimitsSmCrys();
    checkLimitsSmTimo();

}
