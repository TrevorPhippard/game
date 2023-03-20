'use strict';
const db = require('../../db');
const bcrypt = require('bcrypt');

const findAllSQL = `SELECT * FROM users`
const addUserSQL = `INSERT INTO users(first_name, last_name, username, password, email, id) VALUES(?,?,?,?,?,?)`;
const updateSQL = `UPDATE users SET first_name = ? WHERE id = ?`
const deleteSQL = `DELETE FROM users WHERE id=?`

function errorHandling(err) {
    if (err) return console.error(err.message)
}

exports.register = function (req, res) {
    const { first_name, last_name, username, password, email, id } = req.body
    const hashedPassword = bcrypt.hash(password, 10);

    db.run(addUserSQL, [first_name, last_name, username, hashedPassword, email, id], errorHandling)
};

exports.update = function (req, res) {
    db.run(updateSQL, ["Rodney", 1], errorHandling)
};

exports.delete = function (res, req) {
    db.run(deleteSQL, [2], errorHandling)
}

exports.sign_in = function (req, res) {
    console.log('sign in')
};


exports.profile = function (req, res) {
    db.all(findAllSQL, [], (err, rows) => {
        if (err) return console.error(err.message)
        rows.forEach(row => {
            console.log(row)
        });
    });
    // db.close((err) => {
    //     if (err) return console.error(err.message)
    // });
};

