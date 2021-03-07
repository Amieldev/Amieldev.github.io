function print(value){
	document.write(value);
}
function srch(){
var text=document.getElementById("srch").value;
	if(text=="density"||text=="Density"){
	window.location="density.html";
}
	if(text=="speed"||text=="Speed"){
	window.location="speed.html";
}
	if(text=="force"||text=="Force"){
	window.location="force.html";
}
	if(text=="Acceleration"||text=="acceleration"||text=="Accel"||text=="accel"){
	window.location="acceleration.html";
}
	if(text=="gravity"||text=="Gravity"){
	window.location="gravity.html";
}
}
function search(e){
	if(e.keyCode==13){
	srch();
}
}