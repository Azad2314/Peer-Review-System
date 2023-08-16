const docs = require('./swagger-path.js')
module.exports = {
    "swagger": "2.0",
    "info": {
        version: '1.3.0',
        title: 'Peer Review System',
        description: 'employee management',},
    "host": "localhost:8500",
    "schemes": ["http"],
    "consumes": ["application/json"],
    "produces": ["application/json"],
    "paths": docs,
   
    "securityDefinitions": {
        authenticate: {
            type: "apiKey",
            in: "header",
            name: "x-access-token",
            description: "Please provide the valid access token, if you dont have please login and get the token as response!"
        },
        // "mobile": {
        //     "type": "apiKey",
        //     "in": "Headers",
        //     "name": "mobile",
        //     "description": "Set 1 for mobile devices"
        // }
    },
}