let smDavidX=400;
let smDavidY=300;
let directionDavidX=22;
let directionDavidY=55;

let smileyFaceTimoX = 400;
let smileyFaceTimoY = 300;
let directionX = 10;
let directionY = 15;

let smCrysX=400;
let smCrysY=300;
let directionCrysX=70;
let directionCrysY=10;

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
    smileyFaceCrys(smCrysX=smCrysX+directionCrysX, smCrysY=smCrysY+directionCrysY);
}

function checkLimitsSmCrys()
{
    if(smCrysX>=800||smCrysX<=0)
    {   
        directionCrysX*=-1;
    }
    if(smCrysY>=600||smCrysY<=0)
    {
        directionCrysY*=-1;
    }
    checkLimitsSmTimo()
    background(200);
    smileyFaceDavid(smDavidX=smDavidX+directionDavidX,smDavidY=smDavidY+directionDavidY);
    smileyFaceTimo(smileyFaceTimoX = smileyFaceTimoX + directionX, smileyFaceTimoY = smileyFaceTimoY + directionY);
    smileyFaceCrys(400,300);
}

function smileyFaceCrys(x,y){
    //head
    stroke("black");
    fill("orange");
    circle(x, y, 100);
    //eyes
    stroke("black");
    fill("yellow");
    ellipse(x-15, y-18, 10, 5);
    ellipse(x+5, y-18, 10, 7);
    stroke("cyan");
    circle(x-15, y-18, 2);
    circle(x+5, y-18, 2);
    //mouth
    stroke("black");
    fill("grey")
    arc(x-5, y+2, 30, 15, -3.14, Math.PI);
    stroke("blue");
    fill("white")
    arc(x-9, y-4, 7, 7, 0, Math.PI);
    arc(x-1, y-4, 7, 7, 0, Math.PI);
}

function checkLimitsSmDavid()
{
    if(smDavidX>=800||smDavidX<=0)
    {   
        directionDavidX*=-1;
    }
    if(smDavidY>=600||smDavidY<=0)
    {
        directionDavidY*=-1;
    }
}

function smileyFaceDavid(x,y) {
    //head
    stroke("black");
    fill("yellow");
    circle(x, y, 50);
    //eyes
    stroke("black");
    fill("pink");
    ellipse(x-15, y-18, 10, 5);
    ellipse(x+5, y-18, 10, 7);
    stroke("cyan");
    circle(x-15, y-18, 2);
    circle(x+5, y-18, 2);
    //mouth
    stroke("black");
    fill("grey")
    arc(x-5, y+2, 30, 15, -3.14, Math.PI);
    stroke("black");
    fill("white")
    arc(x-9, y-4, 7, 7, 0, Math.PI);
    arc(x-1, y-4, 7, 7, 0, Math.PI);
}

function checkLimitsSmTimo()
{
    if(smileyFaceTimoX>=800||smileyFaceTimoX<=0)
    {   
        directionX*=-1;
    }
    if(smileyFaceTimoY>=600||smileyFaceTimoY<=0)
    {
        directionY*=-1;
    }
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