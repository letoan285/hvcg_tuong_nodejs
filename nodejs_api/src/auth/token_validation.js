const { verify }  = require('jsonwebtoken');
module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get('authorization');
        if(token){
            const headerToken = token.split(' ');
            token = headerToken[1];
            verify(token, 'secret_key', (error, decoded) => {
                if(error){
                    res.json({
                        succes: 0,
                        code: 400,
                        message: 'Invalid Token'
                    });
                } else {
                    next();
                } 
            });
        } else {
            res.json({
                succes: 0,
                code: 401,
                message: 'Unauthorized Access!'
            });
        }
    }
}