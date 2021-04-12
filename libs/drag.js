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