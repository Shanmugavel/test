'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const staticRoute = require('./routes/Static');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route


server.register(Inert, (err) => {
    if(err) {
        throw err;
    } 
      
    server.route({
        method : 'GET',
        path : '/{param*}',
        config : staticRoute.getStaticConfig
    });
    
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});