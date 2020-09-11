const express = require('express');

const helmet = require('helmet');


// **We will comment these back in when we get to a later step
// const db = require('whatever/db-config.js');

const projectRouter = require('../routers/project/project-router.js');

const server = express();

//Third-Party Middleware
server.use(helmet());

// Node Middleware
server.use(express.json());
server.use('/api/projects', projectRouter);

//Custom Middleware
server.use(logger());

// Base Endpoint
server.get('/', (req, res) =>{
    res.status(200).json({ message: "up and running"})
})

// **We will comment this back in when we get to a later step
// Router
// server.use('/api/whatever', whateverRouter)

//Custom Middleware
function logger(req, res, next) {
    return function (req, res, next) {
      console.log(`a ${req.method} request was made to ${req.url} at ${new Date()}`);
      next();
    }
  }

  module.exports = server;