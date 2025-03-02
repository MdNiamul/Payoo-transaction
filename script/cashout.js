document.getElementById('cash-money').addEventListener('click', function(event){
    event.preventDefault();

    const cashAmount = document.getElementById('cash-amount').value;

    const convertedcashAmount  = parseFloat(cashAmount);

    const cashPin = document.getElementById('cash-pin').value;

    const convertedcashPin = parseFloat(cashPin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedBalance = parseFloat(mainBalance);

    if(convertedcashPin===1234){
     const sum = convertedBalance - convertedcashAmount;
     const mainBalance = document.getElementById('main-balance').innerText=sum;

    }
    else{
        alert('enter the valid pin');
    }

})