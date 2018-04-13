# Angular Tutorial

This repository will walk step by step to teach you the basics of angular.  
Each step is commited in its own commit so you can perform diff/pull request
To see what was changed between each steps.

### Kickstart
***

The following code was executed to create this angular project
* Install all the requirements
    ```
    # install the npm angular cli packages 
    npm install -g @angular/cli 
    ```

* Create the project skeleton. 
  The project will be created using the CLI command `ng new <project name>`.

    ```
    # create the new Angular project using the CLI 
    ng new angularTutorial
    
    # Use the following answers:
    ? Would you like to add Angular routing? Yes
    ? Which stylesheet format would you like to use? SCSS

    # switch to the project directory
    cd angularTutorial
    ```

* Run and test the development server

    * Run `ng serve` for a dev server.   
    * Open your browser at: http://localhost:4200/  
      In case you wish to change the default port from 4200:
        ```
        # add/update the package.json by adding the `--port` flag
        # and remember to use npm start instead of `ng serve`
        "scripts": {
            "start": "ng serve --port 5000"
        }
        ```  
    * The app will automatically reload if you change any of the source files.
    
***
### Step 01 - Basics
- Make sure `ng serve` is running and open the browser on `http://localhost:4200/`  

Lets navigate through the different project files to get idea what is going on

#### **[`src/app/app.component.ts`](rc/app/app.component.ts)**

- Change the application title inside the [`src/app/app.component.ts`](rc/app/app.component.ts)
```js
import { Component } from '@angular/core';
// component decorator.
// This component is executed when the application is started
// Its being executed when the 'ng serve' inject the required JS and imports
// into the final index.html file and its executing the Angular code

@Component({
  // This is the entry point for replacing the content with the 
  // templates given by the components (html) files.
  // Each component has its own css, html, js and more which we can reuse later on
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // Set the title which will be passed to the template
  title = 'Angular Tutorial';
}
```
#### **[`src/app/app.component.html`](src/app/app.component.html)**

- Change the [`src/app/app.component.html`](src/app/app.component.html) to display the title 
```html
<h1>{{ title }}</h1>
```
   
