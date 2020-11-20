const pool = require('../../config/database');
module.exports = {
    getAll: (callback) => {
        pool.query(`select * from products`, [], (err, data) => {
            if(err){
                return callback(err);
            }
            return callback(null, data);
        });
    },
    create: (data, callback) => {},
}