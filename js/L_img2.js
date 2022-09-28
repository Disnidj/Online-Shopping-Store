
function loadData(name){
	if(name == "button1"){
	document.getElementById("para").innerHTML="Ladies v neck regular length top in printed bubble Georgette fabric and long puff sleeves with elasticated cuff.";
  
  }else if(name =="button2") {
	document.getElementById("para").innerHTML="7 ITEMS LEFT";

	}else if(name =="button3") {
	document.getElementById("para").innerHTML="12 ITEMS LEFT";

	}else if(name =="button4") {
	document.getElementById("para").innerHTML="20 ITEMS LEFT";
	
	}else if(name =="button5") {
	document.getElementById("para").innerHTML="7 ITEMS LEFT";
	
	}else{
  	alert("SOLD OUT");
  }
}

