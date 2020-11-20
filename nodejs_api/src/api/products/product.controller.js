const { getAll } = require('./product.service');
module.exports = {
    getProducts: (req, res) => {
        getAll((err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: 'get Products successfully',
                data:results
            })
        });
    },
    getOne: (req, res) => {},
    create: (req, res) => {},
    update: (req, res) => {},
    deleteOne: (req, res) => {}
}