import { Request, Response } from "express";
import { getRepository, Like } from "typeorm";
import { Order } from '../entity/Order';
import { User } from '../entity/User';
import { OrderItem } from '../entity/OrderItem';

class ProductController {
    getAll = async (req: Request, res: Response) => {
        const query = req.query;
        let products = [];
        console.log(query.name);
        
       if(query.name || query.description){
        products = await Order.find({ where : [{
            name : Like(`%${query.name}%`),
          }, {
            description : Like(`%${query.description}%`),
          }], relations: ["category"] });
       } else {
           products = await Order.find({ relations: ["category"] });
       }
        


        return res.json({ message: 'success', data: products });
    }
    getOne = async (req: Request, res: Response) => {
        const { params } = req;
        // const product = await Product.find({where: {id: params.id}});
        const result = await Order.findOne(params.id);
        return res.json({ message: 'success', product: result });

    }

    updateOne = async (req: Request, res: Response) => {
        const result = await Order.findOne(req.params.id);
        const product = await Order.merge(result, req.body);
        const rs = await product.save();
        return res.json({ message: 'success', product: rs });
        
    }
    createOne = async (req: Request, res: Response) => {
        const data = req.body;
        const userId = (req as any).userId;
        // const user = await getRepository(User).findOne(userId);
        const carts = data.carts;
        const order = new Order();
        

        order.user_id = parseInt(userId);
        order.customer_id = parseInt(userId);
        order.total = data.total || 999;
        order.status = 0;
        const rs = await order.save();

        for(let i = 0; i < carts.length; i++){
            const orderItem = new OrderItem();
            orderItem.product_id = carts[i].productId;
            orderItem.order_id = rs.id;
            orderItem.quantity = carts[i].quantity;
            orderItem.save();
        }
        return res.status(201).json({ message: 'success', order: rs, carts });
    }
}

const productController = new ProductController();

export default productController;