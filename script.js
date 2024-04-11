
let tableWidth = 800;
let tableHeigth = 600;

function setup() {
    createCanvas(tableWidth, tableHeigth);
}

function draw() {    

    
    background(200);

    smileyFaceDavid(smDavid.x, smDavid.y);
    smileyFaceTimo(smTimo.x, smTimo.y);
    smileyFaceCrys(smCrys.x, smCrys.y); 
        
    checkLimitsSmDavid();
    checkLimitsSmTimo();
    checkLimitsSmCrys();

    createPaddle();

}
