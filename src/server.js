const express = require('express');
const server = express();
const accountRouter = require('./account-router');

server.use(express.json());

server.use('/api', accountRouter)

server.get('/', (req, res) => {
    res.send(`<h2>heyoo</h2>`);
});


module.exports = server;