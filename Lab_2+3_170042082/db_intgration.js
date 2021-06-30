const mysql = require("mysql");
require("dotenv").config();

const CREATE_TABLE = process.env.CREATE_TABLE;
const DB_PASSWORD = process.env.DB_PASSWORD;

const dbconnection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    port: "3306",
    password: DB_PASSWORD,
    database: "user_base"
});

const createTable = (table_creating_query) => {
    dbconnection.query(table_creating_query, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log("Table created...");
    });
}

const insertUser = (insertQuery, user) => {
    dbconnection.query(insertQuery, user, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log("user added...");
    });
}

// const loginUser = (loginQuery) => {
//     return dbconnection.query(loginQuery, (err, result) => {
//         if (err) throw err;
//         if (result.length) {
//             console.log(result[0].username);
//             console.log("valid user...");
//             let name = "";
//             name = result[0].username;
//             return name;
//         } else return null;
//     });
// }

module.exports = {dbconnection, createTable, CREATE_TABLE, insertUser};