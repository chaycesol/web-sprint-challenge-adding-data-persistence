const express = require('express');

const helmet = require('helmet');

const projectRouter = require('../project/project-router');

const server = express();

//Third-Party Middleware
server.use(helmet());

// Node Middleware
server.use(express.json());

//Custom Middleware
server.use(logger());

//Router
server.use('/api/projects', projectRouter);

// Base Endpoint
server.get('/', (req, res) =>{
    res.status(200).json({ message: "up and running"})
})


//Custom Middleware
function logger(req, res, next) {
    return function (req, res, next) {
      console.log(`a ${req.method} request was made to ${req.url} at ${new Date()}`);
      next();
    }
  }

  module.exports = server;