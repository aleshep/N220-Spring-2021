let dvBox = document.getElementById("square");

var width = 100;
var height = 100;
dvBox.style.backgroundColor = "#00FF00";
dvBox.style.width = width + "px";
dvBox.style.height = height + "px";

function grow() { 
    width = width * 1.1;
    height = height * 1.1;
    dvBox.style.width = width + "px";
    dvBox.style.height = height + "px";
}