let xPos = 0;
let yPos = 100;
let xSpeed = 5;
let ySpeed = 5;

function setup() {
	createCanvas(800, 600);
}

function draw() {
	drawBall();
}

function drawBall() {
	background(0);
	ellipse(xPos, yPos, 50, 50);
	xPos += xSpeed;
	yPos += ySpeed;

	if (xPos > width || xPos < 0) {
		xSpeed *= -1;
    }
    	
	if (yPos > height || yPos < 0) {
		ySpeed *= -1;
	}
}