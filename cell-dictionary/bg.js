var body=document.querySelector("body");
var btn=document.querySelector(".light_dark");
function light(){
	body.style.color="black";
	body.style.backgroundColor="white";
	btn.src="sun.png";
	localStorage.bg="white";
	localStorage.text="black";
	localStorage.img="sun.png";
	btn.onclick=function(){dark();}
}
function dark(){
	body.style.color="white";
	body.style.backgroundColor="#3d3d3d";
	btn.src="moon.png";
	localStorage.bg="#3d3d3d";
	localStorage.text="white";
	localStorage.img="moon.png";
	btn.onclick=function(){light();}
}
body.style.backgroundColor=localStorage.bg;
body.style.color=localStorage.text;
document.querySelector("html").addEventListener("keyup",quit)
function quit(e){
	if(e.keyCode==27){
	window.location="index.html";
}
}
btn.src=localStorage.img;