import { getMySQLConnection } from "../database/sql3_instance";

export const getProducts = (req, res) => {
    const pool = getMySQLConnection();
    const result = pool.request().query("select * from adventureworks2019.product limit 5;");
    res.json(result);
};