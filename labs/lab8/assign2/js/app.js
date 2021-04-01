let txtBill = document.getElementById("txtBill");

function doThing() {
    var bill = Number(txtBill.value);
    var tipValue = bill * .20;
    var finalBill = bill + tipValue;
    console.log("Tip: $" + tipValue + " Total: $" + finalBill);

}