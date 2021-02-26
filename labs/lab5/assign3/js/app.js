function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(230, 253, 255);
    bubble("#26cef0", mouseX, mouseY);
    bubble("#26cef0", mouseX/2, mouseY-100);
    bubble("#26cef0", mouseX*2, mouseY+50);
    bubble("#26cef0", mouseX, mouseY+160);
    bubble("#26cef0", mouseX/2, mouseY+100);
}

function bubble(bubbleColor, xHeight, yHeight) {
    
    fill(bubbleColor);
    stroke(0, 142, 237);
    strokeWeight(4);
    circle(xHeight,yHeight,40);
}