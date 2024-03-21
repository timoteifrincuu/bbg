function setup(){
    createCanvas(800, 600);
}

function draw()
{
    background(200);
    smileyFaceDavid();
}
function smileyFaceDavid()
    {
        //head
        stroke("black");
        fill("yellow");
        //eyes
        circle(400,300,50);
        stroke("black");
        fill("pink");
        ellipse(390,290,10,5);
        ellipse(410,290,10,7);
        stroke("cyan");
        circle(390,290,2);
        circle(410,290,2);
        //mouth
        stroke("black");
        fill("grey")
        arc(400,310,30,15,-3.14,Math.PI);
        stroke("black");
        fill("white")
        arc(396,304,7,7,0,Math.PI);
        arc(404,304,7,7,0,Math.PI);
    }