import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import './timepicker.component.js';

@Component({
  selector: 'inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputformComponent implements OnInit {

  @ViewChild('inputBox') inputBox;

  constructor() { }

  ngOnInit() {
  }

  onEnter(value: string){
    console.log(value, " is entered");
    this.resetInputBoxValue();
  }
  
  resetInputBoxValue(){
    this.inputBox.nativeElement.value = '';
  }
  
}
