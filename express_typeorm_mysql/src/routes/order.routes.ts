import express, { Router } from 'express';

import productController from '../controllers/product.controllers';


class OrderRoute {
    public router: Router = Router();
    constructor(){
       this.config();
    }
    public config(){
        this.router.get('/', productController.getAll);
        this.router.get('/:id', productController.getOne);
        this.router.post('/create', productController.createOne);
        this.router.put('/:id', productController.updateOne);
        // this.router.get('/');
    }
}
export default new OrderRoute().router;