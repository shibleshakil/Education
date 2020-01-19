const mysql = require('mysql');

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'education'
});

// connect to database
connection.connect(function(err){
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

module.exports = connection;