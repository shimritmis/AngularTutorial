import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // List all the components which should be available when the applciation 
  // is started. Angular analyze this components and execute the code
  bootstrap: [AppComponent]
})
export class AppModule { }
