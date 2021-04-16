let txtWords = document.getElementById("txtWords");
let dvFound = document.getElementById("dvFound");
let dvCount = document.getElementById("dvCount");

let badWords = ["clear", "water", "tires"];
let tallyCount = 0;

function findWords() {
    var stringVals = txtWords.value;

    let myArray = stringVals.split(" ");

    for(let i = 0; i < myArray.length; i++) {
         if(myArray[i] == "clear") {
            dvFound.innerHTML = "Found";
            tallyCount = tallyCount + 1;
        }
        else if(myArray[i] == "water") {
            dvFound.innerHTML = "Found";
            tallyCount = tallyCount + 1;
        }
        else if(myArray[i] == "tires") {
            dvFound.innerHTML = "Found";
            tallyCount = tallyCount + 1;
        } 
        else {
            dvFound.innerHTML = "Not Found";
        }
        dvCount.innerHTML = "Total: " + tallyCount;
    }
}
