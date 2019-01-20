import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * This is the Servers service, it will store the servers list
 */
export class ServersService {
  // List of servers
  private servers = [
    { id: 1, name: 'Production server', status: 'online' },
    { id: 2, name: 'Test server', status: 'offline' },
    { id: 3, name: 'Dev server', status: 'offline' }
  ];

  // Get the list of servers
  getServers() {
    return this.servers;
  }

  // Get server by Id
  getServer(id: number) {
    const server = this.servers.find((s) => {
      return s.id === id;
    });
    return server;
  }

  // Update server data
  updateServer(id: number, serverInfo: { name: string, status: string }) {
    const server = this.servers.find((s) => {
      return s.id === id;
    });
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
