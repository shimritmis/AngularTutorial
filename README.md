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
***
### Step 02 - Create components (Manually)
We are going to create new component.

- Create new folder named `server` under the `app` folder. 
- Component is build from:

 Role    | File name
---------|-----------
Template |  &lt;name&gt;.&lt;component&gt;**.html**
Style    |  &lt;name&gt;.&lt;component&gt;**.scss**
Code     |  &lt;name&gt;.&lt;component&gt;**.ts**

- As explained above create the following files:
   - [`server.component.html`](src/app/app.component.html)
   - [`server.component.scss`](src/app/app.component.scss)
   - [`server.component.ts`](src/app/app.component.ts)

    #### **[`src/app/server/server.component.html`](src/app/server/server.component.html)**
    ```html
    <h2>Server component</h2>
    ```

    #### **[`src/app/server/server.component.scss`](src/app/server/server.component.scss)**
    ```css
    h2  {color: green;}
    ```

    #### **[`src/app/server/server.component.ts`](src/app/server/server.component.ts)**
    ```js
    // This file will contain our new Component
    // A Component is simply a TypeScript class

    // Import the Component package
    import { Component } from "@angular/core";

    // Create our first Component
    // Tell angular that this is a component and not simple TS class 
    @Component({
    // Configure the Component so angular can know what to do with this class.

    // The html selector for this component (unique selector)
    // In our case this is server component
    selector: 'app-server',

    // The template of this component
    templateUrl: './server.component.html',

    // The stylesheet - [Array]
    styleUrls: ['./server.component.scss']

    })

    export class ServerComponent {}
    ```

- Register the component inside [`src/app/app.module.ts`](src/app/app.module.ts)
```js
// Import our new Server component
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    // We need to register out new server component so we need to 
    // "tell" Angular that we have new module which we will wish to use
    ServerComponent
  ],
```
- The last step is to add the new component to the main template   
#### **[`src/app/app.component.html`](src/app/app.component.html)**
```html
<h1>{{ title }}</h1>
<hr/>
<!-- Add the new created component -->
<app-server></app-server> 
```
***
### Step 03 - Create components using the CLI
Instead of creating manual components we will create one using the CLI commands.  

- We will now create a new component named `servers` (plural)
- In your terminal type `ng generate component servers`   
  or short way: `ng g c servers`
- Update the html in [`servers.component.html`](src/app/servers/servers.component.html):
```html
<h2>List of servers</h2>
<p>
  <app-server></app-server>
  <app-server></app-server>
</p>
```

- Open the [`src/app/app.module.ts`](src/app/app.module.ts) and you will see that the component is already registered.
- Update the [`src/app/app.module.html`](src/app/app.module.html) to display the new component
```html
<h1>{{ title }}</h1>
<hr />
<!-- Add the new created component -->
<app-servers></app-servers>
```
***
### Step 04 - Adding bootstrap CSS
- install bootstrap `npm i bootstrap`
- Add the bootstrap css path to the `angular.json`
```js
"styles": [
    "src/styles.scss",
    "./node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```
- Add html code to verify that the css is loaded **[`src/app/app.module.html`](src/app/app.module.html)**
```html
<div class="row">
  <div class="col-4"></div>
  <div class="col-4">
    <div class="card">
      <div class="card-header">
        {{ title }}
      </div>
      <div class="card-body">
        <p class="card-text">
          <app-servers></app-servers>
        </p>
      </div>
    </div>
  </div>
  <div class="col-4"></div>
</div>
```
***
### Step 05 - Data Binding
Data binding allow us to add dynamic content to the application.    
There are several forms of Binding. Lets start with the simple one

 - Edit the `ServerComponent` inside the [`src/app/server/server.component.ts`](src/app/server/server.component.ts) and add the variables and the method
 ```js
 export class ServerComponent {

  // We dont need to declare the types.
  // typeScript will do it automatically.

  // Add type script number type
  serverId: number = 10;
  // Add the server status as string
  serverStatus: string = 'offline';

  // Add function for data binding to return server status
  getServerStatus() {
    return this.serverStatus;
  }
}
```
- Edit the template [`src/app/server/server.component.html`](src/app/server/server.component.html) and add the binding code to display the content
```html
<h2>Server component</h2>
<p>Data binding [variable] serverId: {{ serverId }} </p>
<p>Data binding [method] serverStatus: {{ getServerStatus() }} </p>
```
***
### Step 06 - Property Binding
At this step we update property using timer and the changes will be reflected in the code.
<br/> 
We will add and update button state.
- The syntax for property binding is `[<html property>]=<angular property>`
- To bind custom attributes like `dataset` use the `attr.` prefix before the attribute name
```js
[attr.data-allow]="allowNewServer"`
```
- Edit [`src/app/server/servers.component.html`](src/app/server/servers.component.html):
```html
<!-- Button for adding more servers -->
<!-- 
    [] mark to angular that we wish to bind the property
    so we can update it from the JS code
-->
<p>allowNewServers:
  <button class="btn btn-primary" [disabled]="!allowNewServer">Add servers</button>&nbsp;
  <span class="btn allowNewServer" [attr.data-allow]="allowNewServer">{{ allowNewServer }} </span>
</p>
```
- Edit the scss file [`src/app/server/servers.component.scss`](src/app/server/servers.component.scss):
```css
.allowNewServer {
    color: white;
}

.allowNewServer[data-allow="true"] {
    background: green;
}

.allowNewServer[data-allow="false"] {
    background: red;
}
```
***
### Step 07 - Event Binding
- The syntax for adding an event binding is using `(<event name>)="<event handler>"`
- Edit [`src/app/servers/servers.component.ts`](src/app/servers/servers.component.ts) and add the required variables and methods
```js
export class ServersComponent implements OnInit {

  // Flag to mark if we can add new server or not
  allowNewServer = false;

  // The text of the button
  allowNewServerButtonText = "Create server";

  // Status to konw if server was created
  serverCreationStatus = "No server was created";

  // the server name which the user will input
  serverName = '--';

  constructor() {

    // Simulate value change for allowing adding new server
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit() {
  }

  // Method for listening when we create new servers
  // Naming convention: 'On...' for event
  onCreateServer() {
    this.serverCreationStatus = "Server was created";
  }

  // the event is passed from the html when we click on the button
  // since we added $event to the button
  onUpdateServerName(event) {
    // type script code for getting the value
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

```
- Update the component html and add the required code. [`src/app/servers/servers.component.html`](src/app/servers/servers.component.html)
  In this step we demonstrated the previous bindings as well.
```html
<h2>List of servers</h2>
<p>
  <app-server></app-server>
</p>
<!-- 
    [] mark to angular that we wish to bind the property
    so we can update it from the JS code

    Adding event handlers 
    `()` is used add event binding for the element
    (click) bind to the click event. 
            in this case it will fired when the user type something
-->
<label>New server Name:</label>
<!-- $event will send the data of the event handler, the data and information of the event -->
<input  type="text" 
        class="form-control" 
        (input)="onUpdateServerName($event)">
<!-- The button for creating new server -->
<button class="btn allowNewServer" 
        [attr.data-allow]="allowNewServer" 
        [innerText]="allowNewServerButtonText" 
        [disabled]="!allowNewServer"
        (click)="onCreateServer()"></button>

<br />
<p>Server creation status:
  <b class="highlight"> {{ serverCreationStatus }}</b>
</p>

<!-- Echo the server name using property binding-->
<p>2 Way binding. Echo the server name as we type:
  <b class="highlight">{{ serverName }}</b>
</p>

```
-- Add the following css to the scss file [[`src/app/servers/servers.component.scss`](src/app/servers/servers.component.scss)]
```css
.highlight {
  padding: 0 3px;
  background: yellow;
  color: black;
}
```
***
### Step 08 - 2 way binding [ngModel]
In the previous step we have demonstrated 2 way binding. **Lets dive into it now.**

- 2Way binding allow us to display initial values of the property, to update it and more.
- The syntax is combination of `[] && ()` => `[(ngModel)]`
- In this part we will use html forms so we need to add the appropriate Angular Module 
- Add the import `FormsModule` inside the [`src/app/app.module.ts`](src/app/app.module.ts) 
- **!Note: `FormsModule` should be in `imports` not in `declarations`**
  ```js
  import { FormsModule } from '@angular/forms';
  ...
  imports: [
    BrowserModule,
    // forms module should be in imports not in declarations
    FormsModule
  ],
  ```
- Declare the `ngModel` inside our [src/app/servers/servers.component.html](src/app/servers/servers.component.html)
```html
<!-- 
  $event will send the data of the event handler, the data and information of the event

  [(ngModel)] - 2 way binding data between client side and the Angular internal code .
  The value will be updated whenever this value is updated on the model.
  Using 2Way binding can replace the event handler method
-->
<input  type="text" 
        class="form-control" 
        [(ngModel)]="serverName">
```
- Test the code and see what is happening
