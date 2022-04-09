import mysql from 'mysql';

const dbSettings = {
    host: "localhost",
    database: "adventureworks2019",
    user: "root",
    password: "IPN!10&mysql"
}

function getMySQLConnection(){
    try {
        const pool = mysql.createConnection(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
};

export default getMySQLConnection;