# Vtracker3 (EoD)
The Assetto Corsa metaverse tracker ♾️

# Dev Scripts
Install all packages to run the webapp (Run this only the first time):

    npm run first-start 
Start frontend server:

    npm run frontend
    
Start backend server:

    npm run backend
    
Start backend app with update of build folder (nodemon):
    
    npm run dev-update

# Explanation of the structure (backend)
* .env: environment variables\
* node_modules: all packages of the project\
* src
    * config: contains configuration elements
    * controllers: functions called by routes
    * routes: HTTP request
    * util: vtracker script

    * app.js: contains express middleware configuration
    * main.js: index

# To Do
* Create Database Schema
* Develop Frontend
* Develop Desktop Tracker

...
