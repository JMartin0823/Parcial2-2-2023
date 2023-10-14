import "./components/export"
import {getCat} from "./components/data"
import {getFact} from "./components/data"
import {attributes} from "./components/card/card"

import styles from "./index.css"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const cat = await getCat();
        this.render(cat)
        
    }

   async render(cat:any) {
        if(this.shadowRoot){
                const h1 = this.ownerDocument.createElement('h1')
                h1.innerText = "Cats Facts"
                this.shadowRoot.appendChild(h1)
                const fact = await getFact()

                const card = this.ownerDocument.createElement('my-card')
                card.setAttribute(attributes.fact, fact.value) 
                this.shadowRoot?.appendChild(card)

                const css = this.ownerDocument.createElement('style')
                css.innerHTML = styles
                this.shadowRoot.appendChild(css)

                
                const button = this.ownerDocument.createElement('button')
                button.textContent="Get new fact";
                button.addEventListener('click', async ()=>{
                    
                });
                this.shadowRoot.appendChild(button)
        }
    }}

customElements.define('app-container', AppContainer)