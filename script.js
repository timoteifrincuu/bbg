
let tableWidth = 800;
let tableHeigth = 600;

function setup() {
    createCanvas(tableWidth, tableHeigth);
}

function draw() {    

    background(200);

    smileyFaceDavid(smDavid.x=smDavid.x+(smDavid.directionX*smDavid.speedX),smDavid.y=smDavid.y+(smDavid.directionY*smDavid.speedY));
    smileyFaceTimo(smTimo.x=smTimo.x+(smTimo.directionX*smTimo.speedX), smTimo.y=smTimo.y+(smTimo.directionY*smTimo.speedY));
    smileyFaceCrys(smCrysX=smCrysX+directionCrysX, smCrysY=smCrysY+directionCrysY);    
        
    checkLimitsSmDavid();
    checkLimitsSmTimo();
    checkLimitsSmCrys();

    createPaddle();
}
