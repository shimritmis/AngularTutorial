Angular Tutorial
=================

This repository will walk step by step to teach you the basics of angular.
Each step is commited in its own commit so you can perform diff/pull request
To see what was changed between each steps.

### Kickstart

The following code was executed to create this angular project
* Install all the requirements

    `npn install -g @angular/cli`

* Create the project skelton

    `ng new angularTutorial`  
    `cd angularTutorial`

* Development server

    Run `ng serve` for a dev server.   
    Navigate to `http://localhost:4200/`  
    The app will automatically reload if you change any of the source files.
    
### Step 01 - Basics
Lets navigate through the diffrent project fiels to get idea what is going on

- Make sure `ng serve` is running and open the browser on `http://localhost:4200/`  
- Change the application title inside the `app.component.ts`
- Change the `app/component.html` to display the title 

### Step 02 - Create manual components
We are going to create new component   

- Create new folder named `serevr` under the `app` folder. 
- Inside the folder create the following new files
   
   - `server.component.css`
   - `server.component.html`
   - `server.component.ts` 

- Define the component in the `server.component.ts`   
  View the code to see whats is required.
- Register the component inside `app.module.ts`   

### Step 03 - Create components using the CLI
Instead of creating manual components we will create one using the CLI commands.  

- In your terminal type `ng generate component servers`   
or short way: `ng g c servers`
- Update the html code to the `servers.component.html`

### Step 04 - Adding bootstrap CSS
- install bootstrap `npm i bootstrap`
- Add the bootstrap css path to the `.angular-cli.json`
- Add html code to verify that the css is loaded

### Step 05 - Data Binding
Data binding allow us to add dynamic content to the application.    
There are several forms of Binding. Lets start with the simple one

- Edit the `ServerComponent` inside the `server.component.ts` and add the variables and the method as appear in the source code
- Edit the template `server.component.html` and add the binding code to display the content

### Step 06 - Property Binding
At this step we update property using timer and the changes will be reflacted in the code. We will add and update button state.
- Edit `servers.component.ts` and add the required code
- The syntax for property binding is `[<html propery>]=<angular property>`
- To boind attribute like dataset use the `[attr.<attribute name>]` => `[attr.data-allow]="allowNewServer"`

### Step 07 - Event Binding
- The synatx for adding an event bunding is using `(<event name>)="<event handler>"`
- Edit `servers.component.ts` and add the required variables and methods
- Update the component html and add the required code. In this step we demonstrated the prevoius bindings as well.

### Step 08 - 2 way binding
In the preovoius step we have demostarted 2 way binding. Lets dive into it now.
- 2Way bindign allow us to display iitial values of the property for example
- The syntax is combination of `[] && ()` => `[(ngModel)]`
- Add the import `FormsModule` inside the `app.module.ts` (import declation & inside the imports array).
  **!NOte: `FormsModule` should be in `imports` not in `declarations`**
- Declare the `ngModel` inside our `servers.component.html`
