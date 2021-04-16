let txtInput = document.getElementById("txtInput");

function splitString() {
    var stringVals = txtInput.value;

    let myArray = stringVals.split(",");

    let sum = 0;

    for(let i = 0; i < myArray.length; i++) {
        // sum += Number(myArray[i]);
        var add = sum += Number(myArray[i]);
        var average = sum/Number(myArray[i]);
    }



    
    console.log("Sum:" + add + " Average:" + average);
}