import { Request, Response } from "express";
import { Product } from '../entity/Product';

class ProductController {
    getAll = async (req: Request, res: Response) => {

        const products = await Product.find();

        return res.json({ message: 'success', data: products });
    }
    getOne = async (req: Request, res: Response) => {
        const { params } = req;
        // const product = await Product.find({where: {id: params.id}});
        const result = await Product.findOne(params.id);
        return res.json({ message: 'success', product: result });

    }
    createOne = (req: Request, res: Response) => {
        const product = new Product();
        product.category_id = 1;
        product.name = 'Samsung';
        product.price = 1000;
        product.description = 'this is samsung galax';
        product.save();
        return res.status(201).json({ message: 'success', product });
    }
}

const productController = new ProductController();

export default productController;