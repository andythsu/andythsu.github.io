import 'https://unpkg.com/@polymer/paper-button/paper-button.js?module';
import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@0.6.4/lit-element.js?module';
class MyApp extends LitElement {

  constructor(){
    super();
  }

  static get is(){ return 'my-app'; }

  render(){
    return html`
       <h1>Success!</h1>
         <paper-button class="pink">link</paper-button>
         <paper-button>Flat button</paper-button>
         <paper-button raised>Raised button</paper-button>
         <paper-button noink>No ripple effect</paper-button>
         <paper-button toggles>Toggle-able button</paper-button>
     `; 
  }

  static get properties() {
    return {

    };
  }

  static get observers() {
    return [
    ];
  }  
}

customElements.define(MyApp.is, MyApp);
