
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "User@DESKTOP-MSGV4K1",
    password: "tricky7085",
    database: "test",
    multipleStatements: true
});


con.connect(function (err) {
    if (err) return console.log("failed to connect to mysql server/ database", err);
    else return console.log("connection establish with Datebase!!!!");
});

module.exports = con;