// let positions = [];

// function setup() {
//     createCanvas(400, 400);
// }

// function draw() {
//     positions.push({x: mouseX, y: mouseY});

//     if(positions.length > 10) {
//         positions.shift();
//     }

//     for(var i = 0; i < positions.length; i++) {
//         let x = positions[i].x;
//         let y = positions[i].y;
//         fill(42, 181, 34);
//         circle(mouseX, mouseY, i*5);
//     }
// }





let xPositions = [];
let yPositions = [];

function setup() {
    createCanvas(600, 600);
}

function draw() {
    if(xPositions.length > 10) {
        xPositions.shift();
    }
    if(yPositions.length > 10) {
        yPositions.shift();
    }
    
    xPositions.push(mouseX);
    yPositions.push(mouseY);
    for(var i = 0; i < xPositions.length; i++) {
        for(var j = 0; j < yPositions.length; j++) {
            fill(31, 171, 47);
            circle(xPositions[i], yPositions[i], i*5)
        }
    }
}