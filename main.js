
var display = "";
var answerButton = document.querySelector('#answer');

function clearAnswer() {
    display = "";
    answerButton.value = " ";
}

function updateDisplay(keyPressed) {
    if (!isNaN(keyPressed) || ((display.length > 0) && !isNaN(display.substr(display.length-1)))) {
        display = display + keyPressed;
        answerButton.value = display;
    }
}

function displayTotal() {

 //strip off trailing operators 

    // if (isNaN(display)) {
        var x = eval(display);
        console.log(x);
        answerButton.value = x;
    // }
}