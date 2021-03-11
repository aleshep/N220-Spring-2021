var circles = [
    {x: 350, y: 20, r: 5},
    {x: 20, y: 150, r: 50},
    {x: 50, y: 500, r: 25},
    {x: 400, y: 250, r: 100}
]

var circles2 = [
    {x: 400, y: 40, r: 5},
    {x: 15, y: 50, r: 50},
    {x: 65, y: 420, r: 25},
    {x: 200, y: 100, r: 100}
]

function setup() {
    createCanvas(700, 700);
    background(0);
    noStroke();
}

function draw() {
    for(var i = 0; i < circles.length; i++) {
        let myCircle = circles[i];
        fill(200);
        circle(myCircle.x, myCircle.y, myCircle.r);
        myCircle.x += 1;
        myCircle.y += 1;
    }

    for(var i = 0; i < circles.length; i++) {
        let myCircles = circles2[i];
        fill(100);
        circle(myCircles.x, myCircles.y, myCircles.r);
        myCircles.x += 1;
        myCircles.y += 1;
    }
}