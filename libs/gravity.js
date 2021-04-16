function gravity(element){
    var object=document.querySelector(element);
    object.style.position="relative";
    object.style.transition="linear";
    setInterval(function(){
        var objectTop= parseInt(window.getComputedStyle(object).getPropertyValue("top"));
        var objectHeight= parseInt(window.getComputedStyle(object).getPropertyValue("height"));
        var objectY=objectTop+objectHeight;
        var TotalHeight=parseInt(window.innerHeight)-10;
        if(objectY<TotalHeight){
        object.style.top = (objectTop+3)+"px";
        }
    },9)
}

//Copyright© Amiel Sintayehu(Ami-Dev)