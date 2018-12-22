import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';

import { MatListModule, MatIconModule } from '@angular/material';

import { DaycounterModule } from '../daycounter/daycounter.module';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    DaycounterModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule { }
