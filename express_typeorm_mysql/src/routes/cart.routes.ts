import express, { Router } from 'express';

import cartController from '../controllers/cart.controllers';
import authController from '../auth/auth.controllers';


class CartRoute {
    public router: Router = Router();
    constructor(){
       this.config();
    }
    public config(){
        this.router.post('/add-to-cart', authController.checkToken, cartController.addToCart);
        this.router.get('/cart-detail', authController.checkToken, cartController.getCartDetail);
    }
}
export default new CartRoute().router;