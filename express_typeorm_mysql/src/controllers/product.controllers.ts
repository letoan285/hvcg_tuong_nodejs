import { Request, Response } from "express";
import { Like } from "typeorm";
import { Product } from '../entity/Product';

class ProductController {
    getAll = async (req: Request, res: Response) => {
        const query = req.query;
        let products = [];
        console.log(query.name);
        
       if(query.name || query.description){
        products = await Product.find({ where : [{
            name : Like(`%${query.name}%`),
          }, {
            description : Like(`%${query.description}%`),
          }], relations: ["category"] });
       } else {
           products = await Product.find({ relations: ["category"] });
       }
        


        return res.json({ message: 'success', data: products });
    }
    getOne = async (req: Request, res: Response) => {
        const { params } = req;
        // const product = await Product.find({where: {id: params.id}});
        const result = await Product.findOne(params.id);
        return res.json({ message: 'success', product: result });

    }

    updateOne = async (req: Request, res: Response) => {
        const result = await Product.findOne(req.params.id);
        const product = await Product.merge(result, req.body);
        const rs = await product.save();
        return res.json({ message: 'success', product: rs });
        
    }
    createOne = (req: Request, res: Response) => {
        const data = req.body;
        const product = new Product();
        product.category_id = data.category_id;
        product.name = data.name;
        product.slug = data.slug;
        product.image = data.image;
        product.price = data.price;
        product.is_new = data.is_new;
        product.list_price = data.list_price;
        product.description = data.description;
        product.save();
        return res.status(201).json({ message: 'success', product });
    }
}

const productController = new ProductController();

export default productController;