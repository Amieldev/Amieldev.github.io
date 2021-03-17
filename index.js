var body=document.querySelector("body");
var nav1=document.querySelector(".pro");
var nav2=document.querySelector(".api");
var nav3=document.querySelector(".dev");
var hum=document.querySelector(".hum");
var slide=document.querySelector(".slide1");
var x_slide=document.querySelector("#x");
//The Below code is for mobile nav bar toggling
hum.onclick=function(){
	slide.classList.add("slide2");
	x_slide.classList.add("x");
x_slide.onclick=function(){
	slide.classList.remove("slide2");
	x_slide.classList.remove("x");
}
}
setInterval(function(){
	if(window.innerWidth>window.innerHeight){
	slide.classList.remove("slide2");
	x_slide.classList.remove("x");
}
},10)