//////////// DATABASE CONFIG ////////////

const mysql = require("mysql");
require("dotenv").config()

const connection = mysql.createConnection({
    host : "ucka.veleri.hr",
    user : "fkrstic",
    password : '11',
    database : "fkrstic"
})

//Connection//
connection.connect((err) => {
    if (err){
        console.log("Error occurred while connecting to DB: ", err.stack);
    }
    console.log("Connected to Database")
});

module.exports = connection