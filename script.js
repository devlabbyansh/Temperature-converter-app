function tempConvert() {
    let tempInput = document.querySelector('input').value;
    let unitSelect = document.querySelector('#unitSelect').value;
    let outputSpan = document.querySelector('.circle span');
    let outputUnit = document.querySelector('.circle sup');

    // Validate input
    if (tempInput === '' || isNaN(tempInput)) {
        alert("Please enter a valid number!");
        return;
    }

    tempInput = parseFloat(tempInput);
    let convertedTemp, convertedUnit;

    if (unitSelect === 'celsius') {
        convertedTemp = (tempInput * 9/5) + 32;
        convertedUnit = 'F';
    }
    else if (unitSelect === 'fahrenheit') {
        convertedTemp = (tempInput - 32) * 5/9;
        convertedUnit = 'C';
    }
    else if (unitSelect === 'kelvin') {
        convertedTemp = tempInput - 273.15;
        convertedUnit = 'C';
    }

    outputSpan.textContent = convertedTemp.toFixed(2);
    outputUnit.innerHTML = `&#176;${convertedUnit}`;
}

function tempReset() {
    document.querySelector('input').value = '';
    document.querySelector('.circle span').textContent = '0';
    document.querySelector('.circle sup').innerHTML = '&#176;C';
}
