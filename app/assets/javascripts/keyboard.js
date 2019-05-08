$(document).ready(function(){


class KeyboardController {
	constructor(id_kcontainer,id_targetelement){
		this.kcontainer = $(id_kcontainer);
		this.targetelement = $(id_targetelement);
	}

	KeyPressed(key){
		key = key.toLowerCase()
		console.log(key)
		var te = document.getElementById("targetelement")
		if (key.includes("tab")){
			te.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
		}
		else if (key.includes("accept")){
			alert("Accepted")
			te.innerHTML = ""
		}
		else if (key.includes("cancel")){
			alert("Canceled")
			te.innerHTML = ""
		}
		else if (key.includes("enter")){
			te.innerHTML += "<br>"
		}
		else if (key.includes("bksp")){
			var newStr = te.innerHTML.slice(0, te.innerHTML.length-1);
			te.innerHTML = newStr
		}
		else{
			te.innerHTML += key
		}

	}

	ToggleVisibility(){
		var x = document.getElementById("kcontainer");
		if (x.style.display === "none"){
			x.style.display = "block";
		}
		else{
			x.style.display = "none";
		}
		
	}


}


var keyboardc = new KeyboardController("kcontainer","targetelement")
var toggleButton = document.getElementById("toggleButton")

  $(".key").click(function(){
      keyboardc.KeyPressed($(this).text());
  });

  toggleButton.addEventListener('click',function(){
  	keyboardc.ToggleVisibility();
  },false);
});