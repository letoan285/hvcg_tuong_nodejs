import express, { Router } from 'express';

import userController from '../controllers/user.controllers';
import authController from '../auth/auth.controllers';


class UserRoute {
    public router: Router = Router();
    constructor(){
       this.config();
    }
    public config(){
        this.router.get('/', authController.checkToken, userController.getAll);
        this.router.get('/:id', userController.getOne);
        this.router.post('/create', userController.create);
        this.router.post('/register', userController.register);
        this.router.post('/login', userController.login);
        // this.router.get('/');
    }
}
export default new UserRoute().router;