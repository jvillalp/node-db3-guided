const express = require('express');
const helmet = require('helmet');

const UserRouter = require('./users/user-router.js');
const PostRouter = require('./posts/posts-router');
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/users', UserRouter, PostRouter);
// server.use('/api/users', PostRouter);

module.exports = server;
