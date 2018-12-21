import { Injectable } from '@angular/core';
import { DaycounterModule } from "./daycounter.module";


@Injectable()
export class DaycounterService {
  
  private startTime: string;
  private days;
  private hours;
  private minutes;
  private seconds;
  
  getTimeElapsed(): void {
    var t = Date.parse(new Date().toString()) - Date.parse(this.startTime);
    this.days = Math.floor(t / (1000 * 60 * 60 * 24));
    this.hours = ('0' + Math.floor((t / (1000 * 60 * 60)) % 24)).slice(-2);
    this.minutes = ('0' + Math.floor((t / 1000 / 60) % 60)).slice(-2);
    this.seconds = ('0' + Math.floor((t / 1000) % 60)).slice(-2);
  }
  
  initCounter(startTime){
    this.startTime = startTime;
    var self = this;
    var timeInterval = setInterval(function(){
      self.getTimeElapsed();
    }, 1000);
  }
  
  // getters
  
  getDays(){
    return this.days;
  }
  
  getHours(){
    return this.hours;
  }
  
  getMinutes(){
    return this.minutes;
  }
  
  getSeconds(){
    return this.seconds;
  }
  
}
