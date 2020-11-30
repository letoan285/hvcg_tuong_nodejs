import express, { Router } from 'express';
import categoryController from '../controllers/category.controllers';

class HomeRoute {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    public config(): void {
        this.router.get('/', (req, res) => {
            res.json({message: 'Success'});
        });
    }
}

export default new HomeRoute().router;