window.onload=()=>{
    const UniversalStyle=document.createElement("style");
    UniversalStyle.innerHTML=`
    body{
        overflow-x:hidden;
        margin:0px;
    }
    button{
        width:150px;
        height:50px;
        font-size:20px;
        background:rgb(248, 132, 152);
        border:none;color:white;
        border-radius:7px;
        box-shadow:2px 2px 5px rgba(0,0,0,0.3);
        cursor:pointer;
    }
    .ClickedButton{
        background:linear-gradient(45deg,#08c0ff,cyan);
        box-shadow:none;
    }
    plus-button{
        border-radius:50%;
    }


    `
    document.querySelector("html").appendChild(UniversalStyle);
}



//StyleTag

class StyleTag extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML="<link rel='stylesheet' href='"+this.getAttribute("src")+"'/>";
    }
}
customElements.define("style-sheet",StyleTag);

//Theme-Tag
class ThemeTag extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`
        <meta name="theme-color" content="${this.getAttribute("color")}"/>
        `
    }
}
customElements.define("theme-color",ThemeTag)

//FaviconTag

class FaviconTag extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`<link rel="shortcut icon" href="${this.getAttribute("src")}"/>`
    }
}
customElements.define("favicon-img",FaviconTag);

//ViewPort

class ViewPort extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1"/>`;
    }
}
customElements.define("view-port",ViewPort);

//Nav-Bar

class NavBar extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
            if(this.getAttribute("shadow")=="true"){
                var boxShadow="0px 5px 10px rgba(0,0,0,0.3);";
            }else{
                var boxShadow="none";
            }
            this.innerHTML=`
            <style>
            .nav{
                background:${this.getAttribute("color")||"grey"};
                width:100%;height:${this.getAttribute("height")||"60px"};
                font-size:30px;font-family:cursive;color:white;
                border:none;
                box-shadow:${boxShadow};
                position: fixed;top:0px;
                text-align: center;
            }
            .hum{
                width:30px;
                position:fixed;
                top:15px;left:10px;
                background:transparent;
            }
            </style>
            <div class="nav">${this.getAttribute("title")}</div><br><br><br><br>
            <img src="hum.png" class="hum"/>
    
            `

    }
}
customElements.define("nav-bar",NavBar)

//Back-Nav
class BackNav extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        if(this.getAttribute("shadow")=="true"){
            var boxShadow="0px 10px rgba(0,0,0,0.3);";
        }else{
            var boxShadow="none";
        }
            this.innerHTML=`
            <style>
    
            .nav{
                background:${this.getAttribute("color")};
                width:100%;height:${this.getAttribute("height")||"60px"};
                font-size:30px;font-family:cursive;color:white;
                border:none;
                box-shadow:${boxShadow};
                position: fixed;top:0px;
                text-align: center;
            }
            .back{
                width:30px;
                position:fixed;
                top:15px;left:10px;
                background:transparent;	
            }
            </style>
            <div class="nav">${this.getAttribute("title")}</div><br><br><br><br>
            <a href="index.html"><img src="back.png" class="back"/></a>
            `

    }
}
customElements.define("back-nav",BackNav);

//Plus Button

class PlusBtn extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        if(this.getAttribute("shadow")=="true"){
            this.style="box-shadow:0 15px 30px rgba(0,0,0,0.30), 0 11px 8px rgba(0,0,0,0.22);";            
        }else{
            this.style="box-shadow:none;"
        }
        this.innerHTML=`
            <style>
            .plusBtn{
                border-radius:${this.getAttribute("border-radius")||"50%"};
                width:${this.getAttribute("size")||this.getAttribute("width")||"50px"};
                height:${this.getAttribute("size")||this.getAttribute("height")||"50px"};
                font-size:${(80/100)*parseFloat(this.getAttribute("size"))||"40"}px;
                color:${this.getAttribute("symbol-color")};
                border:${this.getAttribute("border")||"none"};
                background:${this.getAttribute("color")};
            }
            </style>
            <button class="plusBtn">+</button>
            `

    }
}
customElements.define("plus-button",PlusBtn);


//Buttons Click Style
const buttons=Array.from(document.querySelectorAll("button"));
buttons.forEach(i => {
    i.onclick=()=>{
    i.classList.add("ClickedButton");
setTimeout(function(){
    i.classList.remove("ClickedButton");
   },120)
}
});
