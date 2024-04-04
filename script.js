
function setup() {
    createCanvas(800, 600);
}

function draw() {
    checkLimitsSmDavid();
    checkLimitsSmCrys();
    checkLimitsSmTimo();

    background(200);
    smileyFaceDavid(smDavidX=smDavidX+directionDavidX,smDavidY=smDavidY+directionDavidY);
    smileyFaceTimo(smileyFaceTimoX=smileyFaceTimoX+directionX, smileyFaceTimoY=smileyFaceTimoY+directionY);
    smileyFaceCrys(smileyFaceCrys.x, smileyFaceCrys.y);
}
