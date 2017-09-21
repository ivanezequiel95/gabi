class personaTemplate extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        
        this.innerHTML = "<h1>custom</h1>";
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log(attrName, newVal);
    }
}

window.customElements.define('lista-personas', personaTemplate);