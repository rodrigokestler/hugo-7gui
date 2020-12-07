
# Developer Challenge - 7GUI

Este proyecto contiene propuestas para la solución de 5 de los 7 problemas propuestos en https://eugenkiss.github.io/7guis/tasks. Se utilizó React en el proyecto entero para desarrollarlo. 

**Es importante mencionar que es la primera vez que se utiliza React para desarollar software.**

Ver el Table of Contents para conocer más acerca de cada problema con su respectiva solución.

## Table of Contents

* [Installation](#installation)
* [Basic usage](#create-react-app)
* [What's included](#whats-included)
* [Problemas Resueltos](#problemas-resueltos)



## Installation

### Clone repo

``` bash
# clone the repo
$ git clone https://github.com/rodrigokestler/hugo-7gui.git my-project

# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install
```

### Copy and Paste

Copy all your files to your project folder and then,

``` bash
# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install
```

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

see also:
[CRA docs](https://create-react-app.dev/docs/getting-started)

### Basic usage

``` bash
# dev server with hot reload at http://localhost:3000
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.
Utilice el menu izquierdo para acceder a la solución de cada problema.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## What's included

Este proyecto utilizó el template CoreUI-React#v3.0.0 como base para desarrollar todas las vistas. Pueden leer más al respecto en [CoreUI for React](https://coreui.io/react/). Los archivos desarrollados por mi persona se encuentran en src/views/7gui. El template incluye los siguientes directorios y archivos:


```
CoreUI-React#v3.0.0
├── public/          #static files
│   └── index.html   #html template
│
├── src/             #project root
│   ├── assets/      #assets - js icons object
│   ├── containers/  #container source - template layout
|   │   ├── _nav.js  #sidebar config
|   │   └── ...      
│   ├── scss/        #user scss/css source
│   ├── views/       #views source
|   │   ├── 7gui/    #directorio conteniendo los archivos desarrollados para cada problema
│   ├── App.js
│   ├── App.test.js
│   ├── polyfill.js
│   ├── index.js
│   ├── routes.js    #routes config
│   └── store.js     #template state example 
│
└── package.json
```

## Problemas Resueltos

Los archivos creados para desarrollar las siguientes soluciones se pueden encontrar /src/views/7gui.

1. Counter
2. Temperature Converter
3. Flight Booker
4. Timer
5. CRUD
  Para este problema se utilizó [PouchDB](https://pouchdb.com/guides/) como base de datos local para almacenar los usuarios. También se utilizó la librería [React Select](https://react-select.com/home) para construir un dropdown con un search box implementado, ya que el template original no lo incluía en su versión gratis.
