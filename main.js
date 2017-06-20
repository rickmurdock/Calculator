
var display = "";
var answerButton = document.querySelector('#answer');
var decimalFound = false;

function clearAnswer() {
    display = "";
    answerButton.value = " ";
    decimalFound = false;  
}
  
function updateDisplay(keyPressed) {

    if ((!isNaN(keyPressed) || (keyPressed == '.' && decimalFound == false)) ||
        (display.length > 0 && !isNaN(display.substr(display.length-1)) )) {
        
        if (keyPressed != '.' || ((keyPressed == '.') && !decimalFound)) {
            display = display + keyPressed;
            answerButton.value = display;
        }
       
        if (keyPressed == '.') { 
            decimalFound = true;
        } else if (isNaN(keyPressed)) {
            decimalFound = false;
        } 
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

function displaySquareRoot() {
    if (!isNaN(display)) {
        var squareRoot = Math.sqrt(parseInt(display));
        display = squareRoot.toString()
        answerButton.value = squareRoot;
    }
}