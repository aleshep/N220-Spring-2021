let txtFortune = document.getElementById("dvFortune");
let fortunes = ["You are AWESOME!", "Today will be an amazing day.", "Always look on the bright side of things.", "Never hold yourself back!", "Aim for the stars!", "Dream BIG"];

txtFortune.style.backgroundColor = "#cc1dcf";
txtFortune.style.width = "300px";
txtFortune.style.height = "300px";
txtFortune.style.margin = "100px";

function appear() {
    let i = Math.floor(Math.random() * 6);
        txtFortune.innerHTML = fortunes[i];
        console.log(appear);
}
