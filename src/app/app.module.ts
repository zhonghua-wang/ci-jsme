import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CiJsmeModule} from './ci-jsme/ci-jsme.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CiJsmeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
