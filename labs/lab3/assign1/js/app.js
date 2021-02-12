function setup() {
    createCanvas(750, 400);
}

function draw() {
    background(100);

    noFill();

    //For loop syntax
    for( var i = 0; i < 25; i++) {

        if( i % 3 == 0 && i % 5 == 0) {
            fill(12, 45, 235);
            square((i * 30)-13, 187, 26);
        } else if( i % 3 == 0) {
            fill(147, 44, 191);
            circle(i * 30, 200, 13);
        } else if( i % 5 ==0) {
            fill(3, 135, 53);
            square((i * 30)-13, 187, 26);
        } else {
            fill(0, 0, 0);
            circle(i * 30, 200, 13);
        }

    }
}