import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// This code below is the main code which is being executed
if (environment.production) {
  enableProdMode();
}

// DONT be confused with the bootstrap css framework
// The app module is imported above in following the import chain.
// 
// The 'AppModule' is loading the 'AppComponent' 
// which contains the 'app-root' selector as explaind in the module file.
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
