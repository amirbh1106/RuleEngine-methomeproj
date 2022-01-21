


    var Connection = require('tedious').Connection;  
    var config = {  
        server: 'metisdb1.database.windows.net',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'user1', 
                password: 'Trustno1'  
            }
        },
        options: {
            encrypt: true,
            database: 'ORM'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");  
    });
    
    connection.connect();


module.exports = connection


  
