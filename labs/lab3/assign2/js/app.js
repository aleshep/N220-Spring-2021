function setup() {
    createCanvas(750, 400);
}

function draw() {
    for(i = 0; i < 5; i++) {
        for( v = 0; v < i; v++) {
            fill(252, 3, 19);
            square(v * 50, i * 50, 45);
        }
    }
}