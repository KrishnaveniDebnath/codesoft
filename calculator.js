function clearDisplay() {
    document.getElementById('result').value = '';
}

function appendValue(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    const resultElement = document.getElementById('result');
    try {
        resultElement.value = eval(resultElement.value);
    } catch (error) {
        resultElement.value = 'Error';
    }
}

