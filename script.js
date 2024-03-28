let smDavidX=400;
let smDavidY=300;
let directionDavidX=5;
let directionDavidY=55;
let tHeight = 1000;
let tWidth = 1000;

let smileyFaceTimoX = 400;
let smileyFaceTimoY = 300;

let directionX = 1;
let directionY = 1;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    checkLimitsSmDavid();
    background(200);
    smileyFaceDavid(smDavidX=smDavidX+directionDavidX,smDavidY=smDavidY+directionDavidY);
    smileyFaceTimo(400, 300);
    smileyFaceCrys(400,300);
}

function smileyFaceCrys(x,y){
    //head
    stroke("green");
    fill("pink");
    circle(x, y, 50);
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
    circle(400, 300, 10);
}