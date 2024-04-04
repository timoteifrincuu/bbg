
function setup() {
    createCanvas(800, 600);
}

function draw() {
    checkLimitsSmDavid();
    checkLimitsSmCrys();
    checkLimitsSmTimo();

    background(200);
    smileyFaceDavid(smDavid.x=smDavid.x+(smDavid.directionX*smDavid.speedX),smDavid.y=smDavid.y+(smDavid.directionY*smDavid.speedY));
    smileyFaceTimo(smileyFaceTimoX=smileyFaceTimoX+directionX, smileyFaceTimoY=smileyFaceTimoY+directionY);
    smileyFaceCrys(smCrysX=smCrysX+directionCrysX, smCrysY=smCrysY+directionCrysY);    
}
