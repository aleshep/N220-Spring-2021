let dvBox = document.getElementById("square");

var on = "#000"
var off = "#00ff"
dvBox.style.backgroundColor = "#00ff";
dvBox.style.width = "100px";
dvBox.style.height = "100px";

function black() {
    dvBox.style.backgroundColor = on;
}

function blue() {
    dvBox.style.backgroundColor = off;
}