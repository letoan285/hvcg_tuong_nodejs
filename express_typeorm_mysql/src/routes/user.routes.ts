import express, { Router } from 'express';

import userController from '../controllers/user.controllers';


class UserRoute {
    public router: Router = Router();
    constructor(){
       this.config();
    }
    public config(){
        this.router.get('/', userController.getAll);
        // this.router.get('/:id', userController.getOne);
        // this.router.post('/create', userController.createOne);
        // this.router.get('/');
    }
}
export default new UserRoute().router;