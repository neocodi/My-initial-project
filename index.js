function main(){
 var menu = document.createElement("div");
 with(menu){
   id="rollover_frame";
   innerHTML="rollingTest";
   with(style){
     width="100px";
     height="50px";
     backgroundColor="red";
 } }

 /*menu.id = "menu_frame";
menu.style.backgroundColor = "red";
menu.style.width = "100px";
menu.style.height = "25px";*/

document.getElementById("top_wrap").appendChild("menu");
}
