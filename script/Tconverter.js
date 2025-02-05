const inputElementCelsius = document.querySelector('.input'); 
const inputElementFahrenheit = document.querySelector('.fahrenheit input');
const inputElementKelvin = document.querySelector('.kelvin input'); 

function updateFromCelsius() {
    let celsius = parseFloat(inputElementCelsius.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;
        inputElementFahrenheit.value = fahrenheit.toFixed(2);
        inputElementKelvin.value = kelvin.toFixed(2);
    } else {
        inputElementFahrenheit.value = '';
        inputElementKelvin.value = '';
    }
}

function updateFromFahrenheit() {
    let fahrenheit = parseFloat(inputElementFahrenheit.value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        const kelvin = celsius + 273.15;
        inputElementCelsius.value = celsius.toFixed(2);
        inputElementKelvin.value = kelvin.toFixed(2);
    } else {
        inputElementCelsius.value = '';
        inputElementKelvin.value = '';
    }
}

function updateFromKelvin() {
    let kelvin = parseFloat(inputElementKelvin.value);
    if (!isNaN(kelvin)) {
        const celsius = kelvin - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        inputElementCelsius.value = celsius.toFixed(2);
        inputElementFahrenheit.value = fahrenheit.toFixed(2);
    } else {
        inputElementCelsius.value = '';
        inputElementFahrenheit.value = '';
    }
}

inputElementCelsius.addEventListener("focusout", updateFromCelsius);
inputElementFahrenheit.addEventListener("focusout", updateFromFahrenheit);
inputElementKelvin.addEventListener("focusout", updateFromKelvin);
