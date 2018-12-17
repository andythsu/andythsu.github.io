import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputboxComponent implements OnInit {

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
