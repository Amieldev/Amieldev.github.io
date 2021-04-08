var e1=document.getElementById("element1");
var e2=document.getElementById("element2");
var v1=document.getElementById("valence1");
var v2=document.getElementById("valence2");
var value=document.getElementById("value");

function calculate(){
var e1=document.getElementById("element1").value;
var e2=document.getElementById("element2").value;
var v1=parseFloat(document.getElementById("valence1").value);
var v2=parseFloat(document.getElementById("valence2").value);
var value=document.getElementById("value");

var v1s=document.getElementById("valence1").value;
var v2s=document.getElementById("valence2").value;

if(Math.abs(v1)==Math.abs(v2)){
    value.innerHTML=e1+e2;
}
if(Math.abs(v1)!=Math.abs(v2)&&Math.abs(v1)%Math.abs(v2)==0){
    var v_no=v1/v2
    value.innerHTML=e1+e2+"<sub>"+Math.abs(v_no)+"</sub>";
}
if(Math.abs(v1)!=Math.abs(v2)&&Math.abs(v2)%Math.abs(v1)==0){
    var v_no=v2/v1
    value.innerHTML=e1+"<sub>"+Math.abs(v_no)+"</sub>"+e2;
}
if(Math.abs(v1)!=Math.abs(v2)&&Math.abs(v2)%Math.abs(v1)!=0){
    var v_no1=Math.abs(v1);
    var v_no2=Math.abs(v2);
    value.innerHTML=e1+"<sub>"+v_no2+"</sub>"+e2+"<sub>"+v_no1+"</sub>";
}

if(Math.abs(v1)!=Math.abs(v2)&&Math.abs(v2)%Math.abs(v1)!=0 && Math.abs(v2)==1){
    var v_no1=Math.abs(v1);
    var v_no2=Math.abs(v2);
    value.innerHTML=e1+e2+"<sub>"+v_no1+"</sub>";
}

if(Math.abs(v1)!=Math.abs(v2)&&Math.abs(v2)%Math.abs(v1)!=0 && Math.abs(v1)==1){
    var v_no1=Math.abs(v1);
    var v_no2=Math.abs(v2);
    value.innerHTML=e1+"<sub>"+v_no2+"</sub>"+e2;
}

if(e1==""||e2==""||v1s==""||v2s==""){
    alert("You did't put all the required values");
    value.innerHTML="";
}
}

function clearOut(){
    e1.value="";
    e2.value="";
    v1.value="";
    v2.value="";
    value.innerHTML="";
}