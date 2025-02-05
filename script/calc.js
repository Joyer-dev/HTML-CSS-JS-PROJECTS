function calculateTotal() {
    const billAmount = document.querySelector('.bill');
    const tipPercentage = document.querySelector('.bills');

    const bill = parseFloat(billAmount.value);
    const tip = parseFloat(tipPercentage.value) / 100; 
    const total = (bill + (bill * tip)).toFixed(2);

    document.querySelector('.total').innerHTML = `Total: $${total}`;
    console.log(typeof(total));
}
