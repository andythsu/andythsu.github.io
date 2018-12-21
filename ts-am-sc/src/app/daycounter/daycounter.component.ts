import { Component, OnInit, SimpleChanges, OnChanges, Input} from '@angular/core';

import {DaycounterService} from './DayCounter.service';

@Component({
  selector: 'day-counter',
  providers: [DaycounterService],
  templateUrl: './daycounter.component.html',
  styleUrls: ['./daycounter.component.scss']
})
export class DayCounterComponent implements OnInit, OnChanges{

  @Input('startTime') startTime: any;

  constructor(private dayCounter: DaycounterService) {
  }

  ngOnInit(){
    this.dayCounter.initCounter(this.startTime);
  }

  //detect any changes
  ngOnChanges(changes: SimpleChanges){
  }

}
