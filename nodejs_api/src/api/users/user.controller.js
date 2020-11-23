const { getAll, getOne, create } = require('./user.service');
const { genSaltSync, hashSync } = require('bcrypt');

module.exports = {
    getAll: (req, res) => {
        getAll((err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: 'get User List successfully',
                data: result
            })
        });
    },
    getOne: (req, res) => {
        const { id } = req.params;
        getOne(id, (error, user) => {
            if (error) {
                console.log(error);
                return;
            }
            return res.json({
                success: 1,
                message: 'Get User by Id successfully',
                data: user
            })
        });
    },
    createOne: (req, res) => {
        const { body } = req;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    message: 'Created user fail!'
                })
            }
            return res.status(201).json({
                success: 1,
                message: 'Create User successfully'
            })
        });
    }
}
