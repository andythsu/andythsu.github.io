import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';

import { MatListModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule { }
