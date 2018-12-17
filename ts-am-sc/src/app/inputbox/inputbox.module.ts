import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputboxComponent } from './inputbox.component';

import { 
 MatFormFieldModule,
 MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [InputboxComponent],
  exports: [InputboxComponent]
})
export class InputboxModule { }
