import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

class AuthController {
    checkToken = (req: Request, res: Response, next: NextFunction) => {
        let token = req.get('authorization');
        if(token){
            const headerToken = token.split(' ');
            token = headerToken[1];
            verify(token, 'secret_token', (err: any, decoded: any) => {
                if(err){
                    res.json({success: 0, message: 'Invalid Token'});
                } else {
                    next();
                }

            })

        } else {
            res.status(401).json({success: 0, message: 'Unauthorized Access !'})
        }
    }
}

const authController = new AuthController();
export default authController;