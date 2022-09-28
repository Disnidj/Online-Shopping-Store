
function loadData(name){
	if(name == "button1"){
	document.getElementById("para").innerHTML="Ladies V neck regular length top in printed bubble Georgette fabric and long puff sleeves with elasticated cuff";
  
  }else if(name =="button2") {
	document.getElementById("para").innerHTML="10 ITEMS LEFT";

	}else if(name =="button3") {
	document.getElementById("para").innerHTML="8 ITEMS LEFT";

	}else if(name =="button4") {
	document.getElementById("para").innerHTML="5 ITEMS LEFT";
	
	}else if(name =="button5") {
	document.getElementById("para").innerHTML="SOLD OUT";
	
	}else{
  	alert("SOLD OUT");
  }
}

