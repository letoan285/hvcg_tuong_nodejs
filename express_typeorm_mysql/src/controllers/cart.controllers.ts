import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import { User } from "../entity/User";
import bcrypt, {compareSync} from 'bcryptjs';
import { sign } from "jsonwebtoken";
import { Cart } from "../entity/Cart";


class CartController {

    constructor() {

    }

    addToCart = async (req: Request, res: Response) => {
        const user_id = (req as any).userId;
        const productExist = await getRepository(Cart).findOne(req.body.product_id);
        if(productExist){
            const newProduct = productExist;
            newProduct.quantity = productExist.quantity + req.body.quantity;
            const cart = await getRepository(Cart).save(newProduct);
            res.json({message: 'Add To Cart Successfully'});
        } else {
            const data = {
                user_id: user_id,
                product_id: req.body.product_id,
                quantity: req.body.quantity
            }
            
            const cart = await getRepository(Cart).save(data);
    
            const user = await getRepository(User).findOne(user_id);
        
            res.json({message: 'Add To Cart', data: user});

        }
        

    }

    getCartDetail = async (req: Request, res: Response) => {
        const user_id = (req as any).userId;
        const carts = await getRepository(Cart).find({where: {user_id: user_id}});
        console.log(carts);
        
        res.status(200).json({message: 'Success', carts: carts});
    }



}

const cartController = new CartController();

export default cartController;