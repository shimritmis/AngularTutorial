import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  // Flag to mark if we can add new server or not
  allowNewServer = false;

  // The text of the button
  allowNewServerButtonText = "Create server";

  // Status to konw if server was created
  serverCreationStatus = "No server was created";

  // the server name which the user will input
  serverName = "-N/A-";

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
    this.serverCreationStatus = "Server was created [" + this.serverName + "]";
  }

  // the event is passed from the html when we click on the button
  // since we added $event to the button
  onUpdateServerName(event) {
    // type script code for getting the value
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
