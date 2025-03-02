document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('hello');
    const pin = document.getElementById('pin').value;
    const convertedPin = parseFloat(pin);
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedBalance = parseFloat(mainBalance);
    // console.log(convertedAmount);
    if(amount && pin){
        if(convertedPin===1234){
           const sum = convertedBalance + convertedAmount;
           document.getElementById('main-balance').innerText = sum;
        }
        else{
            alert('invalid pin');
        }

    }
    else{
        alert('enter amount');
    }
})
