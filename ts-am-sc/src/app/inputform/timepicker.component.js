import { PolymerElement, html } from '@polymer/polymer';
import '@vaadin/vaadin-time-picker';

class TimePicker extends PolymerElement{
    static get is(){
        return 'time-picker';
    }
    static get properties(){
        return {
            label: {
                type: String
            }
        };
    }
    static get template(){
        return html`
        <style>
        vaadin-time-picker > vaadin-combo-box-light > vaadin-time-picker-text-field[part="input-field"]{
            background-color: unset;
        }
        </style>
        <vaadin-time-picker label="{{label}}"></vaadin-time-picker>
        `;
    }
}

customElements.define(TimePicker.is, TimePicker);
