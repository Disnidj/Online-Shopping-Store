function submitCardData(){
var cardholdersname=document.getElementById("cardHoldersNameInput").value;

if(cardholdersname==null)
{ 
alert("card holder's name cannot be empty");
}

else if(cardholdersname.length==0){
alert("card holder's name cannot be empty");
}
     
var cardnumber=document.getElementById("cardNumber").value;
if(cardnumber==null)
{ 
alert("Card number cannot be empty");
}

else if(cardnumber.length!=10){
alert("Card Number cannot be empty");
}
     

