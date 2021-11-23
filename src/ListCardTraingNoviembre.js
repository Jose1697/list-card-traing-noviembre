import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './ListCardTraingNoviembre-styles.js';
import '@traning-igh/card-traning/card-traning.js'
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<list-card-traing-noviembre></list-card-traing-noviembre>
```

##styling-doc

@customElement list-card-traing-noviembre
*/
export class ListCardTraingNoviembre extends LitElement {
  static get is() {
    return 'list-card-traing-noviembre';
  }

  // Declare properties
  static get properties() {
    return {
      title: {type: String},
      cards: {type: Array, attribute: 'list-cards'}
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.title='';
    this.cards = [];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('list-card-traing-noviembre-shared-styles')
    ];
  }

  _onSelectCard(e){
    console.log('Fire _onSelectCard',detail);
    this.dispatchEvent(new CustomEvent('selection-card',{
      bubbles: true,
      composed:true,
      detail: e.detail,
    }))
  }

  // Define a template
  render() {
    console.log(this.cards);
    return html`
      <div class="list-card">
        <h1>${this.title}</h1>
        <div class="cards-container">  
          ${this.cards.map((i) => html`
              <div class="card">
                <card-traning 
                  title=${i.title} 
                  info=${i.info}
                  list-items=${JSON.stringify(i.listItems)} 
                  button-name=${i.buttonName}
                  @actionInsurance=${this._onSelectCard}>
                </card-traning>
              </div> 
          `)}
        </div> 
      </div>
      
      
    `;
  }
}
