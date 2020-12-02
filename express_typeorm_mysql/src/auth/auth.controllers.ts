import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IUser {
    userId: string;
    iat: number;
    epx: number;
}

class AuthController {
    checkToken = (req: Request, res: Response, next: NextFunction) => {
        let token = req.get('authorization');
        if(token){
            const headerToken = token.split(' ');
            token = headerToken[1];
            const payload = verify(token, 'secret_token') as IUser;
            (req as any).userId = payload.userId
            
            next();
            

        } else {
            res.status(401).json({success: 0, message: 'Unauthorized Access !'})
        }
    }
}

const authController = new AuthController();
export default authController;