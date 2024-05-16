function findMaxMin() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let num3 = parseInt(document.getElementById('num3').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('result').textContent = 'Please enter valid integers.';
        return;
    }

    let maxElement = Math.max(num1, num2, num3);
    let minElement = Math.min(num1, num2, num3);

    document.getElementById('result').innerHTML = `max element = ${maxElement}<br>min element = ${minElement}`;
}
