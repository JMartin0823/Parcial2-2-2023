import styles from "./card.css"

export enum attributes{
    "fact"="fact"
}

export default class Card extends HTMLElement{
    fact?: string;

    static get observedAttributes(){
        const attrs: Record<attributes, null> = {
            fact: null,
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(
        propName:attributes,
        _:unknown,
        newValue:string
    ){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){ 
        this.shadowRoot.innerHTML = `

        <h1>${this.fact}</h1>
    
        `;

        const css = this.ownerDocument.createElement('style')
        css.innerHTML = styles
        this.shadowRoot?.appendChild(css)
        }
    }
}

customElements.define('my-card', Card)