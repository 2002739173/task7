function generateTable() {
    let number = parseInt(document.getElementById('numberInput').value);

    if (isNaN(number)) {
        document.getElementById('result').textContent = 'Please enter a valid integer.';
        return;
    }

    let resultText = '';
    for (let i = 1; i <= 12; i++) {
        resultText += `${number * i} `;
    }

    document.getElementById('result').textContent = `Outputs: ${resultText.trim()}`;
}
