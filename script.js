function setup(){
    createCanvas(800, 600);
}

function draw(){
    background("200");

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
