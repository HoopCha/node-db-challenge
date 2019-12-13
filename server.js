const express = require('express');
const projectRouter = require('./projects/projectRouter');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Project API</h2>`)
})

module.exports = server;