var myRect = {
    x: 150,
    y: 250,
    h: 95,
    w: 200,
    color: [232, 152, 23]
}

function setup() {
    createCanvas(600, 600);
    noStroke();
}

function draw() {
    fill(myRect.color);
    rect(myRect.x, myRect.y, myRect.w, myRect.h);
}