// MOMENTANEAMENTE NO SE USA
// import mysql from 'mysql';
const mysql = require('mysql');

const dbSettings = {
    host: "localhost",
    database: "adventureworks2019",
    user: "root",
    password: "IPN!10&mysql"
}

const connection = mysql.createConnection(dbSettings);
//export default connection;
// export default connection.query;
/*
const conn = mysql.connect(function(err) {
    if (err) {
        console.error('error: ' + err.message);
    }
      
    console.log('Connected to the MySQL server.');
});

export function getMySQLConnection(){
    try {
        const pool = mysql.createConnection(dbSettings);
        console.log('Conecction created sucessfuly');
        return pool;
    } catch (error) {
        console.log(error);
    }
};
*/