let dvResponse = document.getElementById("dvResponse");
let txtUser = document.getElementById("txtUser");
let txtPass = document.getElementById("txtPass");

function doThing() {
    var user = txtUser.value;
    var pass = txtPass.value;

    if (user == "Username" && pass == "Password") {
        dvResponse.innerHTML = "Success";
    }
    else {
        dvResponse.innerHTML = "Wrong Information";
    }
}
