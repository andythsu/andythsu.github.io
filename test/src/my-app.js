import {PolymerElement, html} from 'https://unpkg.com/@polymer/polymer/polymer-element.js?module';

class MyApp extends PolymerElement {
  static get is(){ return 'my-app'; }

  static get template() {
    return html`
      <h1>Success!</h1>     
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
