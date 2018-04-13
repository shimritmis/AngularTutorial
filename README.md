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
