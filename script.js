function setup(){
    createCanvas(800, 600);
}

function draw(){
    background(200);
    smileyFaceTimo();
}   

function smileyFaceTimo(){
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
