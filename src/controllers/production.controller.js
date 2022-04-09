import mysql from 'mysql';

const dbSettings = {
    host: "localhost",
    database: "adventureworks2019",
    user: "root",
    password: "IPN!10&mysql"
}
const connection = mysql.createConnection(dbSettings);

export const getProducts = (req, res) => {
    const _query = `select * from adventureworks2019.product limit 5`;
    connection.query(_query, (err, rows) => {
        if(!err){
            res.json(rows);
            console.log(rows);
        } else {
            console.log(err);
        }
        
    });
};