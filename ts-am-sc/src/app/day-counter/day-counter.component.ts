import { Component, ViewEncapsulation, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import { DayCounter } from '../class/DayCounter';

@Component({
  templateUrl: './day-counter.component.html',
  styleUrls: ['./day-counter.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class DayCounterComponent implements OnInit, OnChanges{

  public dayCounter = new DayCounter();

  constructor() {
  }

  ngOnInit(){
  }

  //detect any changes
  ngOnChanges(changes: SimpleChanges){
  }

}
