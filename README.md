# Part 02 - Routing & Services

- In this section we will start a new project from fresh

### Step 01 - Create Project skeleton
- Lets first create the app
```sh
ng new routing-app

# Answer yes here
Would you like to add Angular routing? (y/N)

# Choose scss on this section
? Which stylesheet format would you like to use? (Use arrow keys)
> CSS
  SCSS   [ http://sass-lang.com   ]
  SASS   [ http://sass-lang.com   ]
  LESS   [ http://lesscss.org     ]
  Stylus [ http://stylus-lang.com ]
```

### Adding bootstrap CSS
- install bootstrap `npm i bootstrap`
- Add the bootstrap css path to the angular.json
```sh 
"styles": [
    "src/styles.scss",
    "./node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```

- Add the following navigation to the [`src/app/app.component.html`](src/app/app.component.html)
```html
<nav class="navbar navbar-dark bg-dark justify-content-center">
  <a class="navbar-brand" href="#">Home</a>
  <a class="navbar-brand" href="#">Servers</a>
  <a class="navbar-brand" href="#">Users</a>
</nav>
```
***
### Step 02 - Build the required components

#### Generate components
- Build the following components
```sh
# Using the git bash we can do it with one line,
# otherwise create them separately
for i in home servers users; do ng g c "${i}" --skipTests=true; done

### Manually creation
ng g c home --skipTests=true
ng g c users --skipTests=true
ng g c servers --skipTests=true
```

#### Create a Service
- We will also use Service. Service is similar to global object which allow to store shared data.
- Generate the service
```sh
ng g service servers --skipTests=true
```
- Update service file in: [`src/app/servers.service.ts`](src/app/servers.service.ts)
```js
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
```
- We must registered the `Service` as the provider at the root level so that it can be injected anywhere in the app. Register the service in the [`src/app/app.module.ts`](src/app/app.module.ts) 
```js
import { ServersService } from './servers.service';
...
providers: [ServersService],
```
- Update [`src/app/app.component.html`](src/app/app.component.html) to use the router
```html
<nav class="navbar navbar-dark bg-dark justify-content-center">
  <a class="navbar-brand" href="#">Home</a>
  <a class="navbar-brand" href="/servers">Servers</a>
  <a class="navbar-brand" href="/users">Users</a>
</nav>
```
**At this point using the routes will do a full page reload**

***
### Step 03 - Add routes and content
- In order to be able to use the navigation we need to import `HttpClientModule, Routes, RouterModule` in the [`src/app/app.module.ts`](src/app/app.module.ts)
- We also need to create the `Routers` links.
  - The routs is a specific structure. `{ path : ... , component: ... }`
  ```js
  const appRoutes: Routes = [{
      path: '<path to this route>',
      component: <Component for this route>
    }];
  ```
  - The routes code
  ```js
  import { Routes, RouterModule } from '@angular/router';
  import { HttpClientModule } from '@angular/common/http';
  ...
  const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'servers', component: ServersComponent }
  ];
  ...
  ```
  - Register the routes. Registering routes is done via the `RouteModules`
  ```js
  imports: [
    ...
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    ...
  ],
  ```
- Update the app template [`src/app/app.component.html`](src/app/app.component.html)
- We need to use the `<router-outlet></router-outlet>` directive in order to display the content of the given route.
```html
<div class="row justify-content-center">
  <router-outlet></router-outlet>
</div>
```


