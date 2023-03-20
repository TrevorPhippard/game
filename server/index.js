const sqlite3 = require('sqlite3').verbose();
const axios = require('axios')
const db = new sqlite3.Database('./mock.db', sqlite3.OPEN_READWRITE, err => {
    if(err) return console.error(err.message)
    console.log('successful connection')
})

// db.run('CREATE TABLE users(first_name, last_name, username, password, email, id)')
// const sql = `INSERT INTO users(first_name, last_name, username, password, email, id)
//     VALUES(?,?,?,?,?,?)`

const sql = `SELECT * FROM users`

// db.run(sql,["rodney","duck", "rodney_duck", "123","rodneytheduck@gmail.com", 1],errorHandling  )

db.all(sql,[], (err,rows)=>{
    if(err) return console.error(err.message)
    rows.forEach(row => {
            console.log(row)
    });
})

db.close((err)=>{
    if(err) return console.error(err.message)
})

