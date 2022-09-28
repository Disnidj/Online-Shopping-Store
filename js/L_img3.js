
function loadData(name){
	if(name == "button1"){
	document.getElementById("para").innerHTML="Ladies crew neck short sleeve t-shirt with placement print on front.";
  
  }else if(name =="button2") {
	document.getElementById("para").innerHTML="20 ITEMS LEFT";

	}else if(name =="button3") {
	document.getElementById("para").innerHTML="10 ITEMS LEFT";

	}else if(name =="button4") {
	document.getElementById("para").innerHTML="6 ITEMS LEFT";
	
	}else if(name =="button5") {
	document.getElementById("para").innerHTML="6 ITEMS LEFT";
	
	}else{
  	alert("SOLD OUT");
  }
}

