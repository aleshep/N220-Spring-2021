// let


// function setup() {
//     createCanvas(600, 600)
// }

// function draw() {
//         background(0)
//         square(mouseX, mouseY, 50);
// }


// var drop = [20,20,20,20];

// function setup() {
//     createCanvas(600, 600);
// }

// function draw() {
//     background(60, 66, 61)
//     for(var i = 0; i < drop.length; i++);
//     square()
// }

var drop = [0,0,0];
let vel = {x: 200, y:0, velocityY:5}

function setup () {
    createCanvas(500, 500);
}

function draw () {
    background(0);
    
    if(frameCount % 10 == 0) {
        for(var i = 0; i < drop.length; i++) {
            circle(250, drop[i], 30);
            drop[i] += vel.velocityY;
        }
    }
}


// let drops = [];

// function setup() {
//     createCanvas(600, 600);
//     fill(104, 107, 105);
// }

// function draw() {
//     circle(200, 200, frameCount%40);


// 
