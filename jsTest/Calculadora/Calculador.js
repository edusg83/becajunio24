var screen = document.getElementById("screen");
var buttons = document.getElementsByTagName("button");

var value1 = "";
var value2 = "";
var operador = "";
var resetScreen = false;

// Iterar sobre todos los botones
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var buttonValue = buttons[i].textContent;

        if (buttonValue === "C") {
            screen.textContent = "";
            value1 = "";
            value2 = "";
            operador = "";
        } else if (buttonValue === "=") {
            value2 = screen.textContent;
            var result = calc(parseFloat(value1), parseFloat(value2), operador);
            screen.textContent = result;
            value1 = result;
            value2 = "";
            operador = "";
            resetScreen = true;
        } else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
            if (operador === "") {
                value1 = screen.textContent;
                operador = buttonValue;
                resetScreen = true;
            } else {
                value2 = screen.textContent;
                var intermediateResult = calc(parseFloat(value1), parseFloat(value2), operador);
                screen.textContent = intermediateResult;
                value1 = intermediateResult;
                operador = buttonValue;
                resetScreen = true;
            }
        } else {
            if (resetScreen) {
                screen.textContent = buttonValue;
                resetScreen = false;
            } else {
                screen.textContent += buttonValue;
            }
        }
    });
}

function calc(value1, value2, operador) {
    switch (operador) {
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*":
            return value1 * value2;
        case "/":
            return value1 / value2;
        default:
            return 0;
    }
}

