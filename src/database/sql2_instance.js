import sql from 'mssql';

const dbSettings = {
    user: 'sa',
    password: '%IXYJ7%tU6Fh',
    server: 'localhost\\MSSQL2',
    database: 'AdventureWorks2019_Sales',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
};