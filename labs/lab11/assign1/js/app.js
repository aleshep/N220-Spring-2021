let sq1 = document.getElementById("sq1");
let sq2 = document.getElementById("sq2");
let sq3 = document.getElementById("sq3");

sq1.addEventListener("click", click1);
sq2.addEventListener("click", click2);
sq3.addEventListener("click", click3);

// square 1 style
sq1.style.width = "200px";
sq1.style.height = "200px";
sq1.style.backgroundColor = "#707070";
sq1.style.margin = "5px";
sq1.style.float = "left";

// let color1 = sq1.getAttribute("data-color");
// console.log(color1);

// square 1 function
function click1(event) {
    let color1 = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = color1;
}

// square 2 style
sq2.style.width = "200px";
sq2.style.height = "200px";
sq2.style.backgroundColor = "#707070";
sq2.style.margin = "5px";
sq2.style.float = "left";



// square 2 function
function click2(event) {
    let color2 = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = color2;
    // sq2.style.backgroundColor = "#13800f"
}

// square 3 style
sq3.style.width = "200px";
sq3.style.height = "200px";
sq3.style.backgroundColor = "#707070";
sq3.style.margin = "5px";
sq3.style.float = "left";

// square 3 function
function click3(event) {
    let color3 = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = color3;
    // sq3.style.backgroundColor = "#1604b8"
}









// make three squares
// for(var i = 0; i < 3; i++) {
//     let newSq = document.createElement("div");
//     newSq.style.width = "200px";
//     newSq.style.height = "200px";
//     newSq.style.backgroundColor = "#707070";
//     newSq.style.margin = "5px";
//     newSq.style.float = "left";

//     square.appendChild(newSq);
// }
