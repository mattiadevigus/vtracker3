# Vtracker3
The Assetto Corsa metaverse tracker ♾️

# Dev Scripts
* npm run first-start: install all packages to run the webapp (Run this only the first time)
* npm run frontend: start frontend server
* npm run backend: start backend server
* npm run dev-update: start backend app with update of build folder (nodemon)
* npm run electron: start desktop app with no update of build folder
* npm run electron-update: start desktop app with update of build folder

# Explanation of the structure (backend)
* .env: environment variables\
* node_modules: all packages of the project\
* src
    * config: contains configuration elements
    * controllers: functions called by routes
    * routes: HTTP request
    * util: vtracker script

    * app.js: contains express middleware configuration
    * server.js: create a connection
    * main.js: settings for desktop app

# To Do
* Convert all React classes to functions (Made it)
* Change Titlebar on Electron Project
* ...

# This document is WIP