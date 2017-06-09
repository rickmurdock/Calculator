
var display = "";
var total = 0;
var operator = "";
var number1 = 0;
var number2 = 0;

function clearAnswer() {
    // total = 0;
    var answerButton = document.querySelector('#answer');
    display = " ";
    answerButton.value = " ";
}

function displayTotal() {
    // parse string here to create total
    // strip off any trailing operators
}

function updateDisplay(keyPressed) {
    var answerButton = document.querySelector('#answer');

    if (!isNaN(keyPressed) || !isNaN(display.substr(display.length-1))) {
        display = display + keyPressed;
        answerButton.value = display;
    }
}
