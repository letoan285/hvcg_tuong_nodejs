import express, { Router } from 'express';

import productController from '../controllers/product.controllers';


class ProductRoute {
    public router: Router = Router();
    constructor(){
       this.config();
    }
    public config(){
        this.router.get('/', productController.getAll);
        this.router.get('/:id', productController.getOne);
        this.router.post('/create', productController.createOne);
        // this.router.get('/');
    }
}
export default new ProductRoute().router;