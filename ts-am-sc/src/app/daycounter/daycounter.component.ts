import { Component, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import { DayCounter } from '../class/DayCounter';

@Component({
  selector: 'day-counter',
  templateUrl: './daycounter.component.html',
  styleUrls: ['./daycounter.component.scss']
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
