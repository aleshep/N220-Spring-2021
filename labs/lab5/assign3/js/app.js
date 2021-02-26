//create canvas
function setup() {
    createCanvas(600, 600);
}

//function draws 5 different bubbles, each with a different x and y position
function draw() {
    background(230, 253, 255);
    bubble("#26cef0", mouseX, mouseY);
    bubble("#26cef0", mouseX/2, mouseY-100);
    bubble("#26cef0", mouseX*2, mouseY+50);
    bubble("#26cef0", mouseX, mouseY+160);
    bubble("#26cef0", mouseX/2, mouseY+100);
}

//creates the "bubbles" class
//class includes the circle shape, fill, and stroke
function bubble(bubbleColor, xHeight, yHeight) {
    
    fill(bubbleColor);
    stroke(0, 142, 237);
    strokeWeight(4);
    circle(xHeight,yHeight,40);
}