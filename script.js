
function setup() {
    createCanvas(800, 600);
}

function draw() {
    checkLimitsSmDavid();
    checkLimitsSmCrys();
    checkLimitsSmTimo();

    background(200);
    smileyFaceDavid(smDavidX=smDavidX+directionDavidX,smDavidY=smDavidY+directionDavidY);
    smileyFaceTimo(smileyFaceTimo.x=smileyFaceTimo.x+smileyFaceTimo.directionX, smileyFaceTimo.y=smileyFaceTimo.y+smileyFaceTimo.directionY);
    smileyFaceCrys(smCrysX=smCrysX+directionCrysX, smCrysY=smCrysY+directionCrysY);    
}
