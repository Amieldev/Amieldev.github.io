class NavBar extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`
        <style>

        .nav{
            background:linear-gradient(45deg,#ff0066,orange);
            width:100%;height:60px;
            font-size:30px;font-family:cursive;color:white;
            border:none;
            box-shadow:0 15px 30px rgba(0,0,0,0.30), 0 11px 8px rgba(0,0,0,0.22);
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
        <div class="nav" class="theme">${this.getAttribute("title")}</div><br><br><br><br>
        <a href="index.html"><img src="back.png" class="back"/></a>
       `
    }
}
customElements.define("nav-bar",NavBar)