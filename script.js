
function setup() {
    createCanvas(800, 600);
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
