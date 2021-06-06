class NavBar extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`
        
    <style>
    .nav{
        width:100%;height:70px;
        background-color:#F50057;
        position:fixed;
        top:0px;
        display:inline-block;
        display:flex;
        box-shadow:0px 7px 8px rgba(0,0,0,0.3);
    }
    .title{
        position:relative;
        top:-23px;left:10px;height:55px;width:180px;
        color:white;font-family:cursive;font-size:40px;
        border:3px solid grey;
        border-radius:20px;
        background:#3d3d3d;
        text-shadow:3px 3px #ff0066;
    }
    </style>

        <div class="nav">
            <a href="index.html"><h1 class="title">Ami-Dev</h1></a>
        </div>
        `
    }
}
customElements.define("nav-bar",NavBar);