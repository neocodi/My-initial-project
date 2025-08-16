function main(){
 var menu = document.createElement("div")
   menu.id = "menu_frame";
   menu.style.backgroundColor = "red";
   menu.style.width = "100px";
   menu.style.height = "25px";

	document.getElementById("top_wrap").appendChild(menu)

	for(var i = 0; i < 5; i++){
		var opt = document.createElement("div");
		opt.id="option"+i
		opt.innerHTML=namer[i]
	}		

};

