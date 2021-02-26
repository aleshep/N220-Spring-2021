let colors = ["#d61818", "#1cbd37", "#264abf", "#f5e12f"];
// const randColors = random(colors)

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(127);
    circle(300, 300, 150);
}

function mousePressed() {
    let i = random(colors);
    fill(i);
    circle(300, 300, 150);

}