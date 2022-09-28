function EnableButton(){
	if(document.getElementById("checkBox").checked){
	 document.getElementById("submitBtn").disabled=false;
	}
	else{
		 document.getElementById("submitBtn").disabled=true;
	}
}

function enableButton(){
	if(document.getElementById("checkBox").checked){
	 document.getElementById("AddToCartbtn").disabled=false;
	}
	else{
		 document.getElementById("AddToCartbtn").disabled=true;
	}
}

function myFunction() {
  var inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = "Please enter the correct item code";
  } else {
    document.getElementById("demo").innerHTML = "Item selected";
  } 
}
