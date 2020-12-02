import { Request, Response } from "express";
import { Category } from '../entity/Category';
import { Product } from '../entity/Product';

class CategoryController {
    constructor() { }
    getAll = async (req: Request, res: Response) => {
        const categories = await Category.find({ relations: ["products"] });
        return res.status(201).json({ message: 'success', data: categories })
    }
    getOne = async (req: Request, res: Response) => {
        const category = await Category.findOne(req.params.id, { relations: ["products"] });
        return res.status(200).json({ message: 'success get one!!!', data: category })
    }

    getProductsByCategory = async (req: Request, res: Response) => {
        const {params} = req
        const products = await Product.find({where: {category_id: params.id}});
        return res.status(200).json({ message: 'success products success!!!', data: products })
    }


    create = (req: Request, res: Response) => {


        const category = new Category();
        category.name = 'Mobile';
        category.parent_id = 0;
        category.image = 'non image';
        category.description = 'non image';
        category.slug = 'non image';
        category.save();
        return res.status(201).json({ message: 'success !!!', data: category })
    }
}

const categoryController = new CategoryController();

export default categoryController;