function setup() {
    createCanvas(400, 300)
}

function draw() {
    
    var xLocation;
    var yLocation;

    background(200)

    ellipse(mouseX, mouseY, 50, 50);

    if (mouseX >= 200) {
        fill(209, 18, 4);
        ellipse(mouseX, mouseY, 50, 50);
    }

    if (mouseX <= 200) {
        fill("blue");
        ellipse(mouseX, mouseY, 50, 50);
    }
}