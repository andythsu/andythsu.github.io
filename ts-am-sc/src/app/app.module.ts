import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { PopupService } from './popup/popup.service';
import { DayCounterComponent } from './day-counter/day-counter.component';

@NgModule({
   declarations: [
      AppComponent,
      PopupComponent,
      DayCounterComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule
   ],
   providers: [
      PopupService
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      PopupComponent,
      DayCounterComponent
   ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
