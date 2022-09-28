
function loadData(name){
	if(name == "button1"){
	document.getElementById("para").innerHTML="Ladies linen 3/4 length printed pant with drawstring at waist and pockets at sides";
  
  }else if(name =="button2") {
	document.getElementById("para").innerHTML="9 ITEMS LEFT";

	}else if(name =="button3") {
	document.getElementById("para").innerHTML="SOLD OUT";

	}else if(name =="button4") {
	document.getElementById("para").innerHTML="SOLD OUT";
	
	}else if(name =="button5") {
	document.getElementById("para").innerHTML="4 ITEMS LEFT";
	
	}else{
  	alert("SOLD OUT");
  }
}

