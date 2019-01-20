import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import our new Server component
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ServersManagerComponent } from './servers-manager/servers-manager.component';

// Directives
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { TextHighlightDirective } from './directives/text-highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    // We need to register out new server component so we need to 
    // "tell" Angular that we have new modal which we will wish to use
    ServerComponent,
    ServersComponent,
    ServerElementComponent,
    ServersManagerComponent,
    HighlightDirective,
    TextHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    // forms module should be in imports not in declarations
    FormsModule
  ],
  providers: [],
  // List all the components which should be available when the applciation 
  // is started. Angular analyze this components and execute the code
  bootstrap: [AppComponent]
})
export class AppModule { }
