import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  // Flag to mark if we can add new server or not
  allowNewServer = false;

  constructor() {

    // Simulate value change for allowing adding new server
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);

  }

  ngOnInit() {
  }

}
