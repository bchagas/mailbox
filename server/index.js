const express  = require('express');
const app      = express();
const messages = require('./data/messages.json');

app.get('/api', function(req, res) {
  res.send('MailBox API');
})

app.get('/api/messages', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  res.send(JSON.stringify(messages));
})

app.listen(3001, function() {
  console.log('Listening on port 3001');
})