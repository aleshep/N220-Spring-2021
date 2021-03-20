function setup() {
    createCanvas(700, 700);
}

function draw () {
    background(0);
    var maxRad = 50;
    var minRad = 5;
    // for( var y = 100; y <= mouseY; y += 70) {
    //     for(var x = 10; x <= mouseY; x += 70) {
    //         var colors = map(y, 0, 400, 230, 320);
    //         fill(colors, 400 - x, 400);

    //         var radius = max(minRad, maxRad - dist(x, y, mouseX, mouseY));
    //         circle(x, y, radius);
    //     }

    for (let circleX = 30; circleX <= 700; circleX += 70) {
        var color = map(mouseY, 0, 400, 230, 320);
        fill(color, circleX, 200);

        var rad = max(minRad, maxRad - dist(circleX, mouseY));
        circle(circleX, mouseY, 20);
        // fill(mouseX, mouseY, 255);

        // if (circleX - 5 < mouseX) {
           
        // }
    }

    function mousePressed(){
        circle(cirlceX - 50, mouseY, 20);
    }
}