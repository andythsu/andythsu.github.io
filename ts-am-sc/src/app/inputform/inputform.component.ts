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
  @ViewChild('timepicker') timePicker;

  constructor() { }

  ngOnInit() {
  }

  onEnter(){
    console.log(this.inputBox.nativeElement.value, " is entered");
    console.log(this.timePicker.nativeElement.value, " is entered");
    this.resetInputBoxValue();
    this.resetTimePickerValue();
  }
  
  resetInputBoxValue(){
    this.inputBox.nativeElement.value = '';
  }

  resetTimePickerValue(){
    this.timePicker.nativeElement.value = '';
  }
  
}
