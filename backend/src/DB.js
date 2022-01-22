
require('dotenv').config();


    var Connection = require('tedious').Connection;  
    var config = {  
        server: process.env.host,  
        authentication: {
            type: 'default',
            options: {
                userName: process.env.user ,
                password: process.env.password 
            }
        },
        options: {
            encrypt: true,
            database: process.env.database
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");  
    });
    
    connection.connect();


module.exports = connection


  
