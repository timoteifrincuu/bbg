
let tableWidth = 800;
let tableHeigth = 600;

function setup() {
    createCanvas(tableWidth, tableHeigth);
}

function draw() {    

    
    background(200);

    smileyFaceDavid(smDavid.x=smDavid.x+(smDavid.directionX*smDavid.speedX),smDavid.y=smDavid.y+(smDavid.directionY*smDavid.speedY));
    smileyFaceTimo(smTimo.x=smTimo.x+(smTimo.directionX*smTimo.speedX), smTimo.y=smTimo.y+(smTimo.directionY*smTimo.speedY));
    smileyFaceCrys(smCrys.x=smCrys.x+(smCrys.directionX*smCrys.speedX), smCrys.y=smCrys.y+(smCrys.directionY*smCrys.speedY));
        
    checkLimitsSmDavid();
    checkLimitsSmTimo();
    checkLimitsSmCrys();

<<<<<<< HEAD
    createPaddle();

    //createBrick();

=======
    //createPaddle();
    createPaddleDavid();
>>>>>>> 4bb780db8cd139f1c28da35280a3a3a084096311
}
