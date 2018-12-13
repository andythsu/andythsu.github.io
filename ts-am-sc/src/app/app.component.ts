import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from './popup/popup.service';
// import { PopupComponent } from './popup/popup.component';

import {DayCounterComponent} from './day-counter/day-counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    // const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    // customElements.define('popup-element', PopupElement);

    const DayCounter = createCustomElement(DayCounterComponent, {injector});
    window.customElements.define('day-counter', DayCounter);

  }
}
