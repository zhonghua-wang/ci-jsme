import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiJsmeComponent } from './ci-jsme.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CiJsmeComponent
  ],
  declarations: [CiJsmeComponent]
})
export class CiJsmeModule { }
