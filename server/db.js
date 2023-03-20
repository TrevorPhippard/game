const sqlite3 = require('sqlite3').verbose();

//connect to DB


const db = new sqlite3.Database('./mock.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error("Erro opening database " + err.message);
    } else {
        console.log('successful connection');
      
        // db.run('CREATE TABLE users( \
        //     id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
        //     last_name NVARCHAR(20)  NOT NULL,\
        //     first_name NVARCHAR(20)  NOT NULL,\
        //     username NVARCHAR(20),\
        //     email NVARCHAR(100),\
        //     password NVARCHAR(20)\
        // )', (err) => {
        //     if (err) {
        //         console.log("Table already exists.");
        //     }
        // });
    }
});
// db.close((err)=>{
//     if(err) return console.error(err.message)
// })

module.exports = db;

