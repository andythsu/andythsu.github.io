import {PolymerElement, html} from 'https://unpkg.com/@polymer/polymer/polymer-element.js?module';
import 'https://unpkg.com/@polymer/paper-button/paper-button.js?module';

class MyApp extends PolymerElement {
  static get is(){ return 'my-app'; }

  static get template() {
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
