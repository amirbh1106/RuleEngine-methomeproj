var mysql = require('mysql');

module.exports = mysql.createConnection({
    host: "metisdb1.database.windows.net",
    user: "user1",
    password: "Trustno1",
    database: "ORM",
    connectTimeout: 50000
  });


  
