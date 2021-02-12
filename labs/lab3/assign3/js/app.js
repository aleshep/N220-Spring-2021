function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(100);

    noFill();

    for( var i = 0; i < 40; i++) {
        circle(250, 250, i * 6);
    }
}