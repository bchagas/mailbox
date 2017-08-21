# Mailbox Prototype Project

Developed with Node 7.7.4.

## First steps
- Download the package at [https://github.com/bchagas/mailbox/archive/master.zip](Mailbox)
- unzip file
- cd [unziped-folder]
- structure
  - server/
  - client/
  - build/

## Running project
- `cd server && npm install && node index.js` the backend will run on port `http://localhost:3001`
- `cd client && npm install && npm start` the front-end will run on port `http://localhost:3000`
- you can also run the front-end from the `build` folder with a static server:
  - `npm install -g serve`
  - `serve -s build` the front-end will run on port `5000`

## About the projects
- I added a button to Mark Unread and Mark Read Messages.
