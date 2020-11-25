const pool = require('../../config/database');
module.exports = {
    getAll: (callback) => {
        pool.query(`SELECT * FROM users`, [], (error, result) => {
            if(error){
                return callback(error);
            }
            return callback(null, result);
        });
    },

    getOne: (id, callback) => {
        pool.query(`SELECT * FROM users WHERE id = ?`, [id], (error, result) => {
            if(error){
                return callback(error);
            }
            return callback(null, result);
        });
    },
    create: (data, callback) => {
        pool.query(`INSERT INTO users(username, email, password, avatar) VALUES (?, ?, ?, ?)`, [data.username, data.email, data.password, data.avatar], (error, result) => {
            if(error){
                return callback(error);
            }
            return callback(null, result);
        });
    },
    getUserByEmail: (email, callback) => {
        pool.query(`SELECT * FROM users WHERE email = ?`, [email], (error, results) => {
            if(error){
                return callback(error);
            }
            return callback(null, results[0]);
        });
    }
}