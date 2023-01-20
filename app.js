var input = document.querySelector("#inputArea");
var redButton = document.querySelector("#redbutton");
var blueButton = document.querySelector("#bluebutton");
var output = document.querySelector("#output");


redButton.addEventListener("click", turnred);
blueButton.addEventListener("click", turnblue);


input.addEventListener("input",textOutput);

function textOutput() {
    var text = input.value;
    output.innerText = text;
    console.log("work")
}


function turnred(){
    var text = input.value;
    output.style.color = "red";
    output.innerText = text;
}

function turnblue(){
    var text = input.value;
    output.style.color = "blue";
    output.innerText = text;
}
