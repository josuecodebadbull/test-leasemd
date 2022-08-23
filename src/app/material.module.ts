import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule  
  ],
  exports: [
    MatSelectModule,
    MatInputModule
  ]
})
export class MaterialModule { }
