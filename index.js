 function main(){
 var menu = document.createElement("div")
 
   menu.id = "menu_frame";
   menu.style.backgroundColor = "red";
   menu.style.width = "100px";
   menu.style.height = "25px";

document.getElementById("top_wrap").appendChild(menu)
};
windows.onload="main()";
