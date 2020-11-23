const { getAll, getOne, create } = require('./product.service');
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
    getOne: (req, res) => {
        const { id } = req.params;
        getOne(id, (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: 'Create Product successfully',
                data:result
            })
        });
    },
    createOne: (req, res) => {
        console.log(req.body);
        create(req.body, (error, result) => {
            if(error){
                console.log(error);
                return;
            }
            return res.json({
                success: 1,
                message: 'get Product by Id successfully',
                data:result
            })
        });
    },
    update: (req, res) => {},
    deleteOne: (req, res) => {}
}