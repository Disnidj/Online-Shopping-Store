
function checkpassword(){
	
	if (document.getElementById("pwd").value != document.getElementById("rpwd").value){
	alert ("Passwords are not matching! please enter the password again");
		return false;
	}else{
	alert ("Success!");
		return true;
	}
}
function enableButton(){
	console.log("check chaged!");
	if(document.getElementById("checkbox").checked){
	 document.getElementById("signup").disabled=false;
	 document.getElementById("signup").style.backgroundColor="#34495e";
	}
	else{
		 document.getElementById("signup").disabled=true;
		 document.getElementById("signup").style.backgroundColor="gray";
	}
}
