document.querySelector("html").addEventListener("keyup",quit)
function quit(e){
	if(e.keyCode==27){
	window.location="index.html";
}
}


//Theme Toggle

document.body.style=localStorage.theme;
document.getElementById("light-dark").style.backgroundColor=localStorage.btn;
document.querySelector(".sideBar").style.backgroundColor=localStorage.sideBar;

const lightDark=document.getElementById("light-dark");
const sideBar=document.querySelector(".sideBar");



lightDark.onclick=()=>{
	dark();
}

function light(){
	document.body.style="color:black;background-color:white;";
	localStorage.theme="color:black;background-color:white;";
	lightDark.style.backgroundColor="yellow";
	localStorage.btn="yellow";
	sideBar.style.backgroundColor="white";
	localStorage.sideBar="white";
lightDark.onclick=()=>{
	dark();
}
}

function dark(){
	document.body.style="color:white;background-color:#3d3d3d;";
	localStorage.theme="color:white;background-color:#3d3d3d;";
	lightDark.style.backgroundColor="black";
	localStorage.btn="black";
	sideBar.style="color:white;background-color:grey;";
	localStorage.sideBar="grey";
lightDark.onclick=()=>{
	light();
}
}