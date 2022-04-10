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

// Productos disponibles para la venta
export const getAvailableProducts = (req, res) => {
    const _query = ` select productid, name from adventureworks2019.Product where SellEndDate is null`;
    connection.query(_query, (err, rows) => {
        if(!err){
            res.json(rows);
            console.log(rows);
        } else {
            console.log(err);
        }
    });
};

export const getAvailableProductsA = (req, res) => {
    const _id = req.params.id;
    const _query = ` select productid, name from adventureworks2019.Product where SellEndDate is null and productid=?`;
    connection.query(_query,[_id], (err, rows) => {
        if(!err){
            const response = {
                message: "Product is available",
                details: rows
            }
            res.json(response);
            console.log(rows);
        } else {
            console.log(err);
        }
    });
};