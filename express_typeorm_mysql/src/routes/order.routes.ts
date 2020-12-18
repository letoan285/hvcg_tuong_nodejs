import express, { Router } from 'express';
import authController from '../auth/auth.controllers';

import orderController from '../controllers/order.controllers';


class OrderRoute {
    public router: Router = Router();
    constructor(){
       this.config();
    }
    public config(){
        this.router.get('/', orderController.getAll);
        this.router.get('/:id', orderController.getOne);
        this.router.post('/create',authController.checkToken, orderController.createOne);
        this.router.post('/place-order',authController.checkToken, orderController.createOne);
        this.router.put('/:id', orderController.updateOne);
        // this.router.get('/');
    }
}
export default new OrderRoute().router;