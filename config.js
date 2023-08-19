const mysql = require('mysql');

const dbcon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "organisation"
})

dbcon.connect( (err) => {
    if(err)
       throw err;
    else
        console.log('mysql connected')
})

module.exports = dbcon;