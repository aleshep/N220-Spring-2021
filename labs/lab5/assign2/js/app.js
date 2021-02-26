let circleX = 0;
let circleY = 100;

let speedX = 3;
let speedY = 3;

let rectX = 300;
let rectY = 555;
let rectH = 30;
let rectW = 200;

function setup() {
    createCanvas(900, 600);
}

function draw() {
    background(220);
    fill(255);
    rect(rectX, rectY, rectW, rectH);
    fill(232, 14, 14);
    circle(circleX, circleY, 25);
    circleX = circleX + speedX;
    circleY = circleY + speedY;

    if(collideRect(circleX, circleY + 15, rectX, rectY, rectW, rectH)) {
        speedY = speedY * -1;
    }

    if ((circleX >= 900) || (circleY >= 600)) {
        circleX = 0;
        circleY = 100;
        speedY = 3;
    }
}

function collideRect(circleX, circleY, rectX, rectY,rectW, rectH) {
    fill(255)
    var colliding = false;

    if((circleX > rectX) && (circleX < rectX + rectW)) {
        if((circleY > rectY && circleY < rectY + rectH)) {
              return true;
        }
   }
   return colliding;
}

