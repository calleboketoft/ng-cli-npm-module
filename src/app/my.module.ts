import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyComponent } from './my.component';

@NgModule({
  declarations: [
    MyComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    MyComponent
  ],
  providers: [],
  bootstrap: [MyComponent]
})
export class MyModule { }
