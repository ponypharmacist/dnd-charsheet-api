const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const consign = require('consign');
const server = express();

const path = require('path');

server.use(express.static('public'));

server.get('/',function(req,res){
  res.sendFile(path.join(__dirname, '/index.html'));
});

server.use(bodyParser.json());
server.set('secret', 'opensecret');
server.use(cors({ origin: '*' }));

consign({cwd: process.cwd() + '/src'})
.include("models")
.then("actions")
.then("routes/auth.js")
.then("routes")
.into(server);

module.exports = server;
