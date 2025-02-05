const containerEl = document.querySelector('.container');
const inputEl = document.querySelector('.input');
const paraEl = document.querySelector('.result');

function updateWeight() {

    let pounds = parseFloat(inputEl.value);


    if (isNaN(pounds)) {
        paraEl.innerHTML = "Please enter a valid number.";
        return;
    }


    const kilograms = pounds * 0.453592;


    paraEl.innerHTML = `Your Weight in Kg is: ${kilograms.toFixed(2)}`;
}
 
inputEl.addEventListener("input", updateWeight);
