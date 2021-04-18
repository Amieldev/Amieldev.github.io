

window.onload=()=>{
var css_positioner=document.createElement("div");
css_positioner.innerHTML=`
<style>
.lib-box{
    border:3px solid silver;
    width:300px;height:400px;
    position: absolute;bottom:0px;right:0px;
}
.ValueBox{
    width:70px;border-radius:5px;
}
#cssCode{
    border:2px solid black;
    width:150px;height:145px;
    position: absolute;
    top:50px;right:5px;
}
.boxNav{
    position: absolute;
    top:0px;width:100%;height:50px;
    background-color:grey;
}
.moveBox{
    width:100px;height:45px;color:black;
    background: linear-gradient(45deg,silver,white);
    border:none;border-radius:15px;
    position: absolute;bottom:2px;left:2px;
}
.elementBox{
    position: absolute;
    top:50%;
}
#Element{
    width:120px;height:20px;border-radius:15px;
}
.idBtn{
    position: absolute;
    bottom:80px;
}
.clsBtn{
    position: absolute;
    bottom:80px;left:100px;
}
.id-cls{
    width:30px;height:30px;
    cursor: pointer;
    background:none;border-radius:50%;
    border:3px solid silver;
}
#done{
    width:120px;height:50px;border:none;border-radius:20px;
    position: absolute;bottom:10px;left:90px;
    color:white;background:linear-gradient(45deg,#00ff00,yellowgreen);
}
</style>

    <div class="lib-box">
    <div class="boxNav"><button class="moveBox">Move-Box</button></div><br><br><br>
  <h2 class="topValueBox">top:<label><input type="text" id="topValueBox" class="ValueBox"/></label></h2>
  <h2 class="leftValueBox">left:<label><input type="text" id="leftValueBox" class="ValueBox"/></label></h2>
  <p id="cssCode"></p><br><br>
  <h2 class="elementBox">Element:<label><input type="text" id="Element"/></label></h2>
  
  <h2 class="idBtn"><label><button id="idBtn" class="id-cls"></button></label>&nbsp;Id</h2>
  <h2 class="clsBtn"><label><button id="clsBtn" class="id-cls"></button></label>&nbsp;class</h2>

        <button id="done" class="doneBtn">Done</button>

</div>
`
var html=document.querySelector("html");
html.appendChild(css_positioner);
}



//drag.js
var html=document.querySelector("html");
var nothin=document.createElement("div");
    nothin.innerHTML="<h1 style='visibility:hidden;width:0px;height:0px;' id='nothin'></h1>";
    html.appendChild(nothin);

var drag=document.getElementById("nothin");
function Drag(selector){
    var element=document.querySelector(selector);
    element.style.position="absolute";
    element.style.transition="linear";
    element.onmousedown=function(){
    element.style.cursor="pointer";
        drag=element;
    }
    document.onmouseup=function(){
        element.style.cursor="auto";
        drag=document.getElementById("nothin");
    }
}
document.onmousemove=function(e){
    var x=parseInt(e.pageX)-(parseInt(window.getComputedStyle(drag).getPropertyValue("width"))/2);
    var y=parseInt(e.pageY)-(parseInt(window.getComputedStyle(drag).getPropertyValue("height"))/2);

    drag.style.top=y+"px";
    drag.style.left=x+"px";
}



//The function below will allow the user to move the box around
var html=document.querySelector("html");
var nothin=document.createElement("div");
    nothin.innerHTML="<h1 style='visibility:hidden;' id='nothin'></h1>";
    html.appendChild(nothin);

function DragBox(){
    var moveBox=document.querySelector(".moveBox");
    moveBox.style.cursor="pointer";
    var libBox=document.querySelector(".lib-box");
    libBox.style.position="absolute";
    libBox.style.transition="linear";
    moveBox.onmousedown=function(){
        drag=libBox;
    }
    moveBox.onmouseup=function(){
        drag=document.getElementById("nothin");
    }
}
document.onmousemove=function(e){
    var x=e.pageX-(parseInt(window.getComputedStyle(drag).getPropertyValue("width"))/10);
    var y=e.pageY-(parseInt(window.getComputedStyle(drag).getPropertyValue("height"))/10);

    drag.style.top=y+"px";
    drag.style.left=x+"px";
}
setTimeout(() => {
    DragBox();    
},2000);





//Variables
setTimeout(() => {
    var idcl;

    var topValueBox=document.getElementById("topValueBox");
    var leftValueBox=document.getElementById("leftValueBox");
    var csscode=document.getElementById("cssCode");
    var selector=document.getElementById("Element");
    var idBtn=document.getElementById("idBtn");
    var clsBtn=document.getElementById("clsBtn");
    var doneBtn=document.querySelector(".doneBtn");
    
    idBtn.onclick=()=>{
        idBtn.style.background="linear-gradient(45deg,#08c0ff,cyan)";
        clsBtn.style.background="none";
        idcl="#";
    }

    clsBtn.onclick=()=>{
        clsBtn.style.background="linear-gradient(45deg,#08c0ff,cyan)";
        idBtn.style.background="none";
        idcl=".";
    }



    
    doneBtn.onclick=()=>{
    var Elm;
    setInterval(function(){
    if(idcl=="#"){
        Elm="#"+selector.value;
    }
    if(idcl=="."){
        Elm="."+selector.value;
    }
    },10)
    
    
    var Elm=idcl+selector.value;
        Drag(Elm);
    setInterval(function(){
        topValueBox.value=window.getComputedStyle(document.querySelector(Elm)).getPropertyValue("top");
    },10)
    setInterval(function(){
        leftValueBox.value=window.getComputedStyle(document.querySelector(Elm)).getPropertyValue("left");
    },10)
    setInterval(function(){
        csscode.innerHTML="<p>top:"+window.getComputedStyle(document.querySelector(Elm)).getPropertyValue("top")+";<br>left:"+window.getComputedStyle(document.querySelector(Elm)).getPropertyValue("left")+";</p>";
    },10)
    }        
},2000);

//Copyright© Amiel Sintayehu(Ami-Dev)