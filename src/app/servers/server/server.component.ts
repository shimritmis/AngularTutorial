import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  // The server properties
  server: {
    id: number,
    name: string,
    status: string
  };

  // Inject the serversService
  constructor(private serversService: ServersService) { }

  ngOnInit() {
    // Get the first server from the service.
    // In real life we will have some meaningful business login here
    this.server = this.serversService.getServer(1);
  }

}