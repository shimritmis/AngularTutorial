import { Component } from '@angular/core';
// component decorator.
// This component is executed when the application is started
// Its being executed when the 'ng serve' injet the required JS and imports
// into the final index.html file and its executing the Angular code

@Component({
  // This is the entry point for replaceing the content with the 
  // templates given by the components (html) files.
  // Each component has its own css, html, js and more which we can reuse later on
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // set the `serverElements` with intial value
  serverElements = [{
    type: 'server',
    name: 'Testserver',
    content: 'Test server'
  }];

  // Set the data which will be passed to this function from the event
  // Once we pass the object we will add it to the array
  onServerAdded(serverData: {
    serverName: string,
    serverContent: string
  }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onServerBlueprintAdded(blueprintData: {
    serverName: string,
    serverContent: string
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
