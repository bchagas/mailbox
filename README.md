# Mailbox Prototype Project

Developed with Node 7.7.4.

## First steps
- Download the package: [Mailbox](https://github.com/bchagas/mailbox/archive/master.zip)
- unzip file
- cd [unziped-folder]
- structure
  - server/
  - client/
  - README.md

## Running project
- `cd server && npm install && node index.js` the backend will run on port `http://localhost:3001`
- `cd client && npm install && npm start` the front-end will run on port `http://localhost:3000`
- you can also run the front-end from the `build` folder inside of `client` folder with a static server:
  - `npm install -g serve`
  - `serve -s build` the front-end will run on port `5000`

## Changes
- I added a button to Mark Unread and Mark Read Messages.
