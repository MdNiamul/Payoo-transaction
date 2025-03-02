document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault();
    const acountNumber=document.getElementById("acount-number").value;
    
    const accountPassword=document.getElementById("account-password").value;
    
    if(acountNumber.length===11){

       if(accountPassword==="1234"){
        window.location.href="./main.html"
       }
       else{
       alert("Pin thik naai");
       }

    }
    else{
        alert("Need correct Account number")
    }

}) 