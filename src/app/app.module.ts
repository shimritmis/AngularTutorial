import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import our new Server component
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    // We need to register out new server component so we need to 
    // "tell" Angular that we have new modal which we will wish to use
    ServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // List all the components which should be available when the applciation 
  // is started. Angular analyze this components and execute the code
  bootstrap: [AppComponent]
})
export class AppModule { }
