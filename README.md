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
***
### Step 09 - Directives
- Directives are html extensions (DOM) which are being created from templates (usually but not always).
- Directives are usually attributes
- The syntax is `*` for example : `*ngIf=...`
    #### ngIf (Structural directive)
    - `ngIf` is used to conditionally display content.
    - The simple way is to use it as attribute
    - We can also us it with `local reference` for `if else` syntax (`ng-template` within the `*ngIf`)

    #### ngStyle / ngClass
    - `ngStyle` is used to conditionally add style to an element.
    - `ngClass` is used to conditionally add css class to an element.
- Update the scss file
```css
.allowNewServer[data-allow="true"],
.allowNewServerAllowed {
    background: green;
}

.allowNewServer[data-allow="false"],
.allowNewServerNotAllowed {
    background: red;
}
```    
- Update the template [`src/app/servers/servers.component.html`](src/app/servers/servers.component.html)
```html
<input type="text"
       class="form-control"
       [(ngModel)]="serverName">
<!-- The button for creating new server -->
<button class="btn allowNewServer"
        [ngClass]="{ 
          'allowNewServerAllowed': allowNewServer === true, 
          'allowNewServerNotAllowed': allowNewServer === false 
        }"
        [innerText]="allowNewServerButtonText"
        [disabled]="!allowNewServer"
        (click)="onCreateServer()"></button>

<br/>
<!-- Using ngIf with local reference (if else syntax)-->
<p *ngIf="serverCreated; else noServer">Server creation status:
  <b class="highlight"> {{ serverCreationStatus }}</b>
</p>
<!-- The template which will be used if ngIf is false -->
<ng-template #noServer>
  No new server yet ...
</ng-template>
<!-- Echo the server name using property binding-->
<p>2 Way binding. Echo the server name as we type:
  <b class="highlight">{{ serverName }}</b>
</p>
```
- Add the [`src/app/servers/servers.component.ts`](src/app/servers/servers.component.ts) code
```js
...
// Flag to mark if we have created a server or not
serverCreated = false;
...
onCreateServer() {
  this.serverCreationStatus = "Server was created [" + this.serverName + "]";
  this.serverCreated = true;
}
...  
```
- Within the GUI create server and view the changes
***
### Step 10 - Multiple components
During this phase will create multiple components and add communication between them

- For this step we will need to get familiar with `ngFor` Directive.  
  read about it before starting this step. [https://angular.io/api/common/NgForOf](https://angular.io/api/common/NgForOf)

- Create the `server-element` component without testing specs `ng g c server-element --skipTests=true`
- Update [`src/app/server-element/server-element.component.html`](src/app/server-element/server-element.component.html) with the following code:
```html
<div class="card card-default m-1">
  <div class="card-header">{{ serverElement.name }}</div>
  <div class="card-body">
    <p>
      <strong *ngIf="serverElement.type === 'server'" style="color: red">{{ serverElement.content }}</strong>
      <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
    </p>
  </div>
</div>

```
- Update [`src/app/app.component.html`](src/app/app.component.html)
 - `serverElement` will be passed to the `app-server-element`
```html
<div class="row justify-content-center">
  <div class="col-4">
    <div class="card">
      <div class="card-header">
        {{ title }}
      </div>
      <div class="card-body">
        <div class="card-text">
          <h5 class="text-center">List of servers {{serverElements.length}}</h5>
          <div class="row justify-content-center">
            <!-- this line "does" the trick, here we process the list of elements-->
            <div *ngFor="let serverElement of serverElements">
              <app-server-element [serverElement]="serverElement"></app-server-element>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
- In the [`src/app/app.component.ts`](src/app/app.component.ts) add the list of servers
```js
export class AppComponent {
  // Set the title which will be passed to the template
  title = 'Angular Tutorial';

  // List of servers
  serverElements = [{
    type: 'server',
    name: 'Test Server 1',
    content: 'Test Server 1'
  },
  {
    type: 'blueprint',
    name: 'Test Server 2',
    content: 'Test Server 2'
  }];
}
```
- Add the binding to the `server-element` in [`src/app/server-element/server-element.component.ts`](src/app/server-element/server-element.component.ts)
```js
export class ServerElementComponent implements OnInit {

  // Declare the input element
  // In the next step we will explain what is it
  @Input() serverElement: Object;

}
```
** At this point the app does nothing since the component methods are remarked
***
### Step 11 - Binding custom properties with `@Input` & `EventEmitter`
In this section we will bind properties between components. We will cover the `@Input` element.

- Add the required code inside the [`src/app/server-element/server-element.component.ts`](src/app/server-element/server-element.component.ts)
```js
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit {
  // Define our custom element which is used in the template (html)
  // This element is private for this component and now we want to "share" it 
  // with other components
  // If we wish to use the property with a different name than the default name we can
  // set the name inside the `@Input()` decorator for example:
  //    @Input('<any name we want>') => @Input('serverItem') and we will use the same name
  //    to reference it in the html template 
  //    `[serverItem]="serverElement"`
  @Input() serverElement: {
    type: string,
    name: string,
    content: string
  }

  constructor() { }

  ngOnInit() { }
}
```
- In order to "expose" it to parent component we need to add `decorator` **`@Input()`** to the element.  
  Dont forget to add the required import as well

- Update [`src/app/app.component.ts`](src/app/app.component.ts) and add the binded event handlers
 ```js
// Set the data which will be passed to this function from the event
// Once we pass the object we will add it to the array
appServerACreated(serverData: {
  serverName: string,
  serverContent: string
}) {
  this.serverElements.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
  });
}

  appServerBCreated(serverData: {
  serverName: string,
  serverContent: string
}) {
  this.serverElements.push({
    type: 'blueprint',
    name: serverData.serverName,
    content: serverData.serverContent
  });
}
```
- Add the `[serverElement]` property to the [`src/app/app.component.html`](src/app/app.component.html) 
```html
<!-- This is the required line-->
<app-server-element 
    *ngFor="let serverElement of serverElements" 
    [serverElement]="serverElement">
</app-server-element>
```
```html
<div class="row justify-content-center">
  <div class="col-4">
    <div class="card">
      <div class="card-header">
        {{ title }}
      </div>
      <div class="card-body">
        <div class="card-text">
          <div class="row justify-content-center">
            <app-servers-manager (serverAEvent)="appServerACreated( $event )" 
                                 (serverBEvent)="appServerBCreated( $event )">
            </app-servers-manager>
          </div>
          <hr />
          <h5 class="text-center">List of servers {{serverElements.length}}</h5>
          <div class="row justify-content-center">
            <!-- this line "does" the trick, here we process the list of elements-->
            <app-server-element *ngFor="let serverElement of serverElements" [serverElement]="serverElement">
            </app-server-element>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
- Update [`src/app/servers-manager/servers-manager.component.html`](src/app/servers-manager/servers-manager.component.html)
```html
<div class="row">
  <div class="col-xs-12 text-center">
    <h5>Add new Servers</h5>
    <label>Server Name</label>
    <input type="text" class="form-control" [(ngModel)]="newServerName">
    <label>Server Content</label>
    <input type="text" class="form-control" [(ngModel)]="newServerContent">
    <br />
    <button class="btn btn-primary btn-sm" (click)="serverManagerAddServerA( $event )">Add Server A</button>&nbsp;
    <button class="btn btn-primary btn-sm" (click)="serverManagerAddServerB( $event )">Add Server B</button>
  </div>
</div>
```
- Update [`src/app/servers-manager/servers-manager.component.ts`](src/app/servers-manager/servers-manager.component.ts) with the `@Output()` && events handlers
```js
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-servers-manager',
  templateUrl: './servers-manager.component.html',
  styleUrls: ['./servers-manager.component.scss']
})
export class ServersManagerComponent implements OnInit {

  // The new server name
  newServerName: String;

  // The server content
  newServerContent: String;

  // Add the 2 event data structures that we need to pass to the custom event
  // We want to make sure that those properties are accessed by the event.
  // Pass the required data inside the <>
  @Output() serverAEvent = new EventEmitter<{
    serverName: String,
    serverContent: String
  }>();

  @Output() serverBEvent = new EventEmitter<{
    serverName: String,
    serverContent: String
  }>();;

  constructor() { }

  ngOnInit() { }

  // Initial code for this step
  serverManagerAddServerA() {
    // Emit the event with the required data as defined above in the `EventEmitter` signature
    this.serverAEvent.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  serverManagerAddServerB() {
    // Emit the event with the required data as defined above in the `EventEmitter` signature
    this.serverBEvent.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
```
***
### Step 12 - Attribute directives
Lets start with **attribute** directives
- Create a new folder [`src/app/directives/highlight`](`src/app/directives/highlight`)
- Create the directive file [`src/app/directives/highlight/highlight.directive.ts`](src/app/directives/highlight/highlight.directive.ts)
```js
import { Directive, ElementRef, OnInit } from '@angular/core';

// Set the attribute directive
// The syntax is [<attribute name>]. 
// When the html will contain the <attribute name> without the brackets
// This directive will be invoked.
@Directive({
    selector: '[appHighlight]'
    // Directive does not have a template !!!!
})

/**
 * We need to implement the OnInit
 */
export class HighlightDirective implements OnInit {

    // Get the element which the directive will be applied to
    // The type is ``ElementRef` and will be references internally as `elementRef`
    // 
    // This is called -- injection --
    // The injection will pass those variables every time the directive will be created
    constructor(private elementRef: ElementRef) {
        // The private elementRef will create a property in this class with the given name
        // so we will be able to access it inside the class
    }

    ngOnInit() {

        // The logic of the directive. 
        // This directive will change the backgroundColor

        // this.elementRef = The local variable
        // nativeElement = The html element
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
```
- Add the directive to the main template [`src/app/app.component.html`](src/app/app.component.html)
```html
<p appHighlight>This is our appHighlight directive</p>
```
- Add the directive under the `@NgModule` in [`src/app/app.module.ts`](src/app/app.module.ts)
```js
import { HighlightDirective } from './directives/highlight/highlight.directive';
...
@NgModule({
  declarations: [
    ...
    HighlightDirective
```    
***
### Step 13 - Directive Render
- Docs: [`https://angular.io/api/core/Renderer2`](https://angular.io/api/core/Renderer2)
- Create a new directive and this time with the CLI command
```js
ng g d directives/text-highlight --skipTests
```
- Create new file [`src/app/directives/text-highlight.directive.ts`](src/app/directives/text-highlight.directive.ts)
- Add the required code to the `directives/text-highlight.directive.ts`
```js
// We need to import the requirements for the Renderer
// Make sure to import Renderer2
import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective implements OnInit {

  // In this directive we will be using renderer and the element as before
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // In stead of using the native element we wil use the renderer
    // The setStyle method get the required element and the style
    this.renderer.setStyle(
      this.elRef.nativeElement, // Which element we want to add style to
      'font-size', // The css property which we wish to assign
      '24px' // the value of the css property
      /** Optional 4th param for flex css */
    )
  }
}
```
- Update [`src/app/app.module.ts`](src/app/app.module.ts) and register the module
- Add the directive to the main template
```html
<p appTextHighlight>This is our appTextHighlight directive</p>
```
- Add the directive to the template and verify that its working
***
### Step 14 - Directive Events
- In this step we will interact with the directive
- In order to do it we need to add `HostListener`.
- The format of the `@HostListener` is: `@HostListener( <event_name>) <function_name> (<Event data>)`
- Add the `HostListener` to the directive from previous step [`src/app/directives/text-highlight.directive.ts`](src/app/directives/text-highlight.directive.ts)
```js 
// We need to import the requirements for the Renderer
// Make sure to import Renderer2
import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective implements OnInit {

  // In this directive we will be using `renderer` and the element as before
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // In stead of using the native element we wil use the renderer
    // The setStyle method get the required element and the style
    this.renderer.setStyle(
      this.elRef.nativeElement, // Which element we want to add style to
      'font-size', // The css property which we wish to assign
      '24px' // the value of the css property
      /** Optional 4th param for flex css */
    )
  }

  /**
   * Add the mouse event listeners to the directive
   * Each event gets it own Host listener
   */
  @HostListener('mouseenter') mouseover(event: Event) {
    // as before we will use the renderer
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'navy');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    // as before we will use the renderer
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }
}
```
- Move with the mouse over the directive and test it
***
### Step 15 - Directive Properties (HostBinding)
- In this step we will be changing one of the nodes property like `style`, `class` etc.
- We will need to add `@HostBinding` decorator to the property we wish to update inside [`src/app/directives/text-highlight.directive.ts`](src/app/directives/text-highlight.directive.ts)
```js
// Set the property we wish to bind, in our case it will be the backgroundColor of the style attribute
@HostBinding('style.backgroundColor') bgColor: string;

// Add another color binding
@HostBinding('style.color') color: string;
```
- Update the code in the `@HostListener`
```js
  /**
 * Add the mouse event listeners to the directive
 * Each event gets it own Host listener
 */
@HostListener('mouseenter') mouseover(event: Event) {
  // Instead of the renderer we will now have a direct access to the style background
  this.bgColor = '#1e1e1e';
  this.color = '#4EC9B0';
}

@HostListener('mouseleave') mouseleave(event: Event) {
  this.bgColor = 'transparent';
  this.color = 'black';
}
```
***
### Step 16 - Directive Properties (HostBinding)
Instead of having the colors **hard coded** we wish to read them **from the element** (will be set in the template as attribute)
- Add the `Input` decorator for the properties in [`src/app/directives/text-highlight.directive.ts`](src/app/directives/text-highlight.directive.ts)
```js
// Add the input fields
@Input() defaultBgColor: string;
@Input() hoverBgColor: string;
```
- Set the default colors in `ngOnInit`
```js
ngOnInit() {
  // Set the defaults ...
  this.bgColor = this.defaultBgColor;
  this.color = this.defaultColor;
...
```
***
### Step 17 - Structural Directives
- In the previous steps we used **attribute** directives (`ngIf`, `ngFor` etc), now we will add structural directives.
- Lets create a new directive using the CLI which will behave opposite to the `ng-if` directive and name it unless 
```
ng g d unless --skipTests=true
```
- In this directive we need to **get the condition** as input from the element so we need to add the `@Input` decorator for the value. 
- To do so we will need to use `TemplateRef` && `ViewContainerRef`
- We also need to **listen for changes** we will add the `set` keyword next to the `@Input`<br/>
!!! Important: **The name of the property must be the same as the directive name**
- [`src/app/unless.directive.ts`](src/app/unless.directive.ts)
```js
  @Input() set appUnless(condition: boolean) {}
```
- Add the contractor properties (template & view)
  ```js
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) { }
  ```
- Now update the unless `@Input()` logic
  ```js
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  ```  
- Full code [`src/app/unless.directive.ts`](src/app/unless.directive.ts)  
```js
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  visible: boolean = true;

  // In this case its a property which will be executed whenever this property is 
  // changes even if the value is outside of this directive.
  @Input() set appUnless(condition: boolean) {
    // Check the condition
    if (!condition) {
      // The unless directive should display the content if the condition is false
      // In order to display the content we creating a view and injecting the template
      // into this view
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // Remove the content from the view
      this.vcRef.clear();
    }
  }

  // This directive will be used with ng-template since its a structural template
  // so we will grab the template and the container where to display it
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) { }

}
```
- Add the required code to the [`src/app/app.component.html`](src/app/app.component.html)
```html
    <div *appUnless="true">This is the content when *appUnless="true" </div>
    <div *appUnless="false">This is the content when *appUnless="false" </div>
```
