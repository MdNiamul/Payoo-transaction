document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    // console.log(typeof amount);
    const convertedAmount = parseFloat(amount);
    // console.log(typeof convertedAmount);
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    const mainBlance = document.getElementById('main-balance').innerText;
    const convertedBalance = parseFloat(mainBlance);

    if(convertedPin===1234){
        const sum = convertedBalance + convertedAmount;
        const mainBlance = document.getElementById('main-balance').innerText=sum;
    }
    else{
        alert('Your Pin in is invalid')
    }

    // const pin = document.getElementById('pin').value;
    // const convertedPin = parseInt(pin);

    // if(convertedPin===1234){
    //     console.log('Pin add kora jabe');
    // }
    // else{
    //     console.log('pin thik hyni');
    // }
})