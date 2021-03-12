function print(value){
	document.write(value);
}
function srch(){
var text2=document.getElementById("srch").value;
var text=text2.toLowerCase();
	if(text=="density"){
	window.location="density.html";
}
	if(text=="speed"){
	window.location="speed.html";
}
	if(text=="force"){
	window.location="force.html";
}
	if(text=="Acceleration"){
	window.location="acceleration.html";
}
	if(text=="gravity"){
	window.location="gravity.html";
}
	if(text=="pathagorean theorem"||text=="hypotenuse"){
	window.location="hypo.html";
}
}
function search(e){
	if(e.keyCode==13){
	srch();
}
}