const mysql = require('mysql');

const dbcon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ayesha12#",
    database: "organisation"
})

dbcon.connect( (err) => {
    if(err)
       throw err;
    else
        console.log('connected')
})

module.exports = dbcon;