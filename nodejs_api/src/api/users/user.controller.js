const { getAll, getOne, create, getUserByEmail } = require('./user.service');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');

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
    },

    register: (req, res) => {
        const { body } = req;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    message: 'Register fail!'
                })
            }
            return res.status(201).json({
                success: 1,
                message: 'Register successfully'
            })
        });
    },
    login: (req, res) => {
        const { body } = req;
        getUserByEmail(body.email, (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    message: 'Register fail!'
                })
            }
            if(!results){
                return res.status(401).json({
                    success: 0,
                message: 'Invalid Email Or Password'
                })
            }
            const rs = compareSync(body.password, results.password);
            if(!rs){
                return res.status(401).json({
                    success: 0,
                    message: 'Sai Mat Khau'
                })
            } else {
                results.password = undefined;
                const jsonwebtoken = sign({result: results}, 'secret_token', {expiresIn: '30d'});

                return res.json({
                    success: 1,
                    data: results,
                    access_token: jsonwebtoken,
                    message: 'Login Thanh Cong'
                })
            }

        });
    }
    

}
