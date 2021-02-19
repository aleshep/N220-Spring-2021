function setup() {
    createCanvas(700, 700)
}

let colors = ["#ff7de5","#ffe17d","#522f0a"];

function draw() {
    for(var i = 0; i < 3; i++) {
        fill(colors[i]);
        rect(i * 150, 200, 150, 150);
    }
}