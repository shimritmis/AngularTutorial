import { Component, Output } from '@angular/core';
// component decorator.
// This component is executed when the application is started
// Its being executed when the 'ng serve' injet the required JS and imports
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
