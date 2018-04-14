import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName = '';
  newServerContent = '';

  // Add the 2 event data structures that we need to pass to the custom event
  // We want to make sure that those properties are accessed by the event.
  // Pass the required data inside the <>

  @Output() serverCreated = new EventEmitter<{
    serverName: string,
    serverContent: string
  }>();

  @Output() blueprintCreated = new EventEmitter<{
    serverName: string,
    serverContent: string
  }>();;

  constructor() { }

  ngOnInit() { }

  // Initial code for this step
  onAddServer() {
    // Emit the event with the required data as defined above in the `EventEmitter` signature
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    // Emit the event with the required data as defined above in the `EventEmitter` signature
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
