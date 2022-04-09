import { getConnection } from "../database/sql2_instance";

export const getOrderDetail = async (req, res) => {
    const pool = await getConnection();
    //const result = await pool.request().query("select * from AdventureWorks2019.Production.Product where ProductID = (	select ProductID  from (	select ProductID,count(ProductID) as Ventas from SREMOTO2.AdventureWorks2019.Sales.SalesOrderDetail group by ProductID ) as t where Ventas in( select MAX(Ventas) from (select count(ProductID) as Ventas from SREMOTO2.AdventureWorks2019.Sales.SalesOrderDetail group by ProductID	) as t2	));");
    const result = await pool.request().query("select top(5) * from AdventureWorks2019_Sales.Sales.SalesOrderDetail");
    // console.log(result)
    res.json(result);
};