function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(200);
    smileyFaceDavid();
    smileyFaceTimo(400, 300);
    smileyFaceCrys();
}

function smileyFaceCrys(){
    //BODY
    fill("white");
    stroke("black");
    circle(400,300, 50);

    //EYES
   stroke("brown");
   ellipse(390, 290, 10, 5);
   ellipse(410, 290, 10, 5);

   //PUPIL
   stroke("black");
   fill("brown");
   circle(390, 290, 2);
   circle(410, 290, 2);
   
   //MOUTH
   stroke("red");
   fill("black");
   arc(400, 310, 10, 40, 0, Math.PI); 

   //CHEEKS
   fill("pink");
   stroke(" ");
    circle(415, 303, 10);
    circle(385, 303, 10);
}

function smileyFaceDavid() {
    //head
    stroke("black");
    fill("yellow");
    circle(405, 308, 50);
    //eyes
    stroke("black");
    fill("pink");
    ellipse(390, 290, 10, 5);
    ellipse(410, 290, 10, 7);
    stroke("cyan");
    circle(390, 290, 2);
    circle(410, 290, 2);
    //mouth
    stroke("black");
    fill("grey")
    arc(400, 310, 30, 15, -3.14, Math.PI);
    stroke("black");
    fill("white")
    arc(396, 304, 7, 7, 0, Math.PI);
    arc(404, 304, 7, 7, 0, Math.PI);
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
