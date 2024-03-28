function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(200);
    smileyFaceDavid(400,300);
    //smileyFaceTimo();
    //smileyFaceCrys();
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

function smileyFaceTimo() {
    //BODY
    stroke("black");
    fill("black");
    circle(400, 300, 50);

    //EYES
    fill("white");
    stroke("white");
    //eyes
    ellipse(390, 290, 10, 5);
    ellipse(410, 290, 10, 5);
    //pupils
    stroke("blue");
    fill("black");
    circle(390, 290, 2);
    circle(410, 290, 2);

    //MOUTH
    fill("white");
    stroke("white");
    arc(400, 310, 40, 10, 0, Math.PI);

    //NOSE
    fill("pink");
    circle(400, 300, 10);
}