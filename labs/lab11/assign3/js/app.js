let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let question1 = document.getElementById("question1");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");

question1.addEventListener("click", Answer);
question2.addEventListener("click", Answer);
question3.addEventListener("click", Answer);

function Answer(event) {
    let answer = event.target.getAttribute("data-answer");

    if(answer == "Joe Biden") {
        answer1.innerHTML = answer;
    } else if (answer == "Peony") {
        answer2.innerHTML = answer;
    } else if (answer == "IU Bloomington") {
        answer3.innerHTML = answer;
    }
}