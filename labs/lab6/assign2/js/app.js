var myCircle = {
    x: 300,
    y: 350,
    r: 10
}

function setup() {
    createCanvas(600, 700);
}

function draw() {
    fill(45, 107, 194);
    background(150);
    // myCircle.x += 1;
    myCircle.r += 1;
    // myCircle.y += 1;
    circle(myCircle.x, myCircle.y, myCircle.r);
}