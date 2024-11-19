function calculateInterest() {
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var years = parseInt(document.getElementById('years').value);

    var interest = (principal * rate * years) / 100;

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Interest: $' + interest.toFixed(2);
}
