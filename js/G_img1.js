
function loadData(name){
	if(name == "button1"){
	document.getElementById("para").innerHTML="Mens casual short sleeve button down printed shirt with chest pocket";
  
  }else if(name =="button2") {
	document.getElementById("para").innerHTML="16 ITEMS LEFT";

	}else if(name =="button3") {
	document.getElementById("para").innerHTML="7 ITEMS LEFT";

	}else if(name =="button4") {
	document.getElementById("para").innerHTML="9 ITEMS LEFT";
	
	}else if(name =="button5") {
	document.getElementById("para").innerHTML="14 ITEMS LEFT";
	
	}else{
  	alert("invalid");
  }
}

