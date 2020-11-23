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
    getOne: (id, callback) => {
        pool.query(`SELECT * FROM products where id = ?`,[id], (error, product) => {
            if(error){
                return callback(error);
            }
            return callback(null, product[0]);
        });
    },
    create: (data, callback) => {
        const slug = 'auto-generated-slug'+(new Date()).toString();
        pool.query(`INSERT INTO products (name, slug, price, list_price, category_id, supplier_id, description, image, status, stock) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [data.name, slug, data.price, data.list_price, data.category_id, data.supplier_id, data.description, data.image, data.status, data.stock], (error, results) => {
            if(error){
                return callback(error);
            }
            return callback(null, results);
        });
    },
}
