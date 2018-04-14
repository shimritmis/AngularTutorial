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