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