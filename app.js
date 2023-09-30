let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    const inputValue = parseFloat(display.value);
    if (!isNaN(inputValue)) {
        display.value = Math.sqrt(inputValue);
    } else {
        display.value = 'Error';
    }
}

function calculateExponentiation() {
    const expression = display.value.split('^');
    if (expression.length === 2) {
        const base = parseFloat(expression[0]);
        const exponent = parseFloat(expression[1]);
        if (!isNaN(base) && !isNaN(exponent)) {
            display.value = Math.pow(base, exponent);
        } else {
            display.value = 'Error';
        }
    } else {
        display.value = 'Error';
    }
}

function calculateSine() {
    const inputValue = parseFloat(display.value);
    if (!isNaN(inputValue)) {
        display.value = Math.sin(inputValue);
    } else {
        display.value = 'Error';
    }
}

function calculateCosine() {
    const inputValue = parseFloat(display.value);
    if (!isNaN(inputValue)) {
        display.value = Math.cos(inputValue);
    } else {
        display.value = 'Error';
    }
}

function calculateTangent() {
    const inputValue = parseFloat(display.value);
    if (!isNaN(inputValue)) {
        display.value = Math.tan(inputValue);
    } else {
        display.value = 'Error';
    }
}
