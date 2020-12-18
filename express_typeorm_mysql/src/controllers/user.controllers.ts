import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import { User } from "../entity/User";
import bcrypt, {compareSync} from 'bcryptjs';
import { sign } from "jsonwebtoken";


class UserController {

    constructor() {

    }

    getAll = async (req: Request, res: Response) => {
        const users = await getRepository(User).find();
        return res.json({ status: 'OK', data: users });
    }

    getOne = async (req: Request, res: Response) => {
        const {params} = req;
        const user = await getRepository(User).findOne(params.id);
        return res.json({ status: 'OK', data: user });
    }

    create = async (req: Request, res: Response) => {
        const salt = await bcrypt.genSalt(10);
        const data = req.body;
        data.password = await bcrypt.hash(req.body.password, salt);
        const newUser = await getRepository(User).save(data);
        res.json({data: newUser});

    }

    register = async (req: Request, res: Response) => {
        const salt = await bcrypt.genSalt(10);
        const data = req.body;
        data.password = await bcrypt.hash(req.body.password, salt);
        const newUser = await getRepository(User).save(data);
        res.json({success: true, message: 'Register successfully', data: newUser});

    }

    login = async (req: Request, res: Response) => {
        
        const user = await this.getUserByEmail(req, res);
        let {password} = req.body;
        if(!user){
            res.json({success: 0, message: 'Email and Password not empty !'});
        } else {
            const result = compareSync(password, user.password);
          
            if(result){
                user.password = undefined;
                const jsontoken = sign({userId: user.id}, 'secret_token', {expiresIn: '30d'});
                return res.json({success: 1, message: 'Login successfully', token: jsontoken})
            } else {
                return res.json({success: 0, message: 'Invalid Email or Password'})
            }
        }
         
    }

    getUserByEmail = async (req: Request, res: Response): Promise<any> => {
        const results = await getRepository(User).find({where: {email: req.body.email}});
        if(results && results.length > 0){
            return results[0];
        } else {

            return; 
        }
    }
}

const userController = new UserController();

export default userController;