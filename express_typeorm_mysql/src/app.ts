import { Application } from "express";
import {createConnection} from "typeorm";
import cors from 'cors';
import productRouter from './routes/product.routes';
import express from 'express';
import env from 'dotenv';
import bodyParser from 'body-parser';
import categoryRouter from "./routes/category.routes";
import userRouter from './routes/user.routes';
import homeRouter from './routes/home.routes';
import orderRouter from './routes/order.routes';
import cartRouter from './routes/cart.routes';

export class Server {
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    
    routes(): void {
        this.app.use('/', homeRouter);
        this.app.use('/api/products', productRouter);
        this.app.use('/api/categories', categoryRouter);
        this.app.use('/api/users', userRouter);
        this.app.use('/api/orders', orderRouter);
        this.app.use('/api/carts', cartRouter);
    }
    config(): void {
        env.config();
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(express.json());

    }

    start(): void {
        this.app.listen(process.env.PORT, async () => {
           await createConnection();
           
            console.log(`Server running on port ${process.env.PORT}`);
            
        })
    }
}


