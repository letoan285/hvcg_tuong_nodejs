import express, { Router } from 'express';
import categoryController from '../controllers/category.controllers';

class CategoryRoute {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    public config(): void {
        this.router.get('/', categoryController.getAll);
        this.router.get('/:id', categoryController.getOne);
        this.router.get('/:id/products', categoryController.getProductsByCategory);
        this.router.post('/create', categoryController.create);
    }
}

export default new CategoryRoute().router;