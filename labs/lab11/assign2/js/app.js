var red = 0;
var green = 0;
var blue = 0;

let currentColor = document.getElementById("currentColor");
let dvBox = document.getElementById("dvBox");

// color box style
dvBox.style.backgroundColor = "#000000";
dvBox.style.height = "150px";
dvBox.style.width = "400px";

// buttons
let B1 = document.getElementById("B1");
let B2 = document.getElementById("B2");
let B3 = document.getElementById("B3");
let B4 = document.getElementById("B4");
let B5 = document.getElementById("B5");
let B6 = document.getElementById("B6");
let B7 = document.getElementById("B7");
let B8 = document.getElementById("B8");
let B9 = document.getElementById("B9");

// event listeners for buttons
// Red color
B1.addEventListener("click", Red);
B2.addEventListener("click", Red);
B3.addEventListener("click", Red);
// Green color
B4.addEventListener("click", Green);
B5.addEventListener("click", Green);
B6.addEventListener("click", Green);
// Blue color
B7.addEventListener("click", Blue);
B8.addEventListener("click", Blue);
B9.addEventListener("click", Blue);

// Red event function
function Red(event) {
    red += Number(event.target.getAttribute("data-value"));
    dvBox.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    currentColor.innerHTML = "rgb(" + red + "," + green + "," + blue + ")";
}

// Green event function
function Green(event) {
    green += Number(event.target.getAttribute("data-value"));
    dvBox.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    currentColor.innerHTML = "rgb(" + red + "," + green + "," + blue + ")";
}

// Blue event function
function Blue(event) {
    blue += Number(event.target.getAttribute("data-value"));
    dvBox.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    currentColor.innerHTML = "rgb(" + red + "," + green + "," + blue + ")";
}



// let box = document.getElementById("dvBox");
// let color = document.getElementById("dvColor");


// // box style
// box.style.width = "500px";
// box.style.height = "150px";
// box.style.backgroundColor = "#000000";
// box.style.margin = "10px";

// // color box style
// color.style.width = "500px";
// color.style.height = "35px";
// color.style.backgroundColor = "#ffffff";
// color.style.outline = "thin solid #000000";
// color.style.margin = "10px";

// function button(event) {
    
// }