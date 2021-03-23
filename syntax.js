// Tag Element

class Tag extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.style.color="#ff0066";
    }
}
customElements.define("tag-",Tag);
//string Element

class String extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.style.color="orange";
    }
}
customElements.define("string-",String);
//Attribute Element

class Attribute extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.style.color="#00ff00";
    }
}
customElements.define("attribute-",Attribute);
class Function extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.style.color="#00ff00";
    }
}
//Selector Element

customElements.define("function-",Function);
class Selector extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.style.color="cyan";
    }
}
customElements.define("selector-",Selector);

//Propertie Element

class Propertie extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.style.color="orange";
    }
}
customElements.define("propertie-",Propertie);

//Value Element
class Value extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.style.color="cyan";
    }
}
customElements.define("value-",Value);