
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
    // TODO strip off trailing operators 
    if (display != ""){
        var total = eval(display);
        display = total.toString();
        answerButton.value = total;
   }
}