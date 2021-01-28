function setup() {
    var red = "#FF0000"

    createCanvas(800,600);
    noStroke();

    background(154, 213, 230); //red
//neck
    fill(125, 81, 22);
    rect(495, 300, 50, 90);

//tail
    fill(125, 81, 22);
    ellipse(160, 300, 35, 200);

//back legs (left)
    fill(79, 50, 10);
    ellipse(200, 500, 55, 200);

//back legs (right)
    fill(79, 50, 10);
    ellipse(515, 500, 55, 200);

//front legs (left)
    fill(125, 81, 22);
    ellipse(185, 500, 55, 200);

//front legs (right)
    fill(125, 81, 22);
    ellipse(500, 500, 55, 200);

//body
    fill(125, 81, 22);
    ellipse(350, 400, 400, 135);    //red

//ears (right)
    fill(0, 0, 0);
    ellipse(575, 300, 40, 175);

//head shadow
    fill(79, 50, 10);
    circle( 525, 262, 70);
//head
    fill(125, 81, 22);
    circle( 525, 255, 70);

//ears (left)
    fill(0, 0, 0);
    ellipse(470, 300, 40, 175)

//snout
    fill(125, 81, 22);
    ellipse(580, 300, 95, 45)

}
