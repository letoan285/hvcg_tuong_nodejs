import { Application } from "express";
import {createConnection} from "typeorm";
import cors from 'cors';
import productRouter from './routes/product.routes';
import express from 'express';
import env from 'dotenv';
import categoryRouter from "./routes/category.routes";
import userRouter from './routes/user.routes';

export class Server {
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    
    routes(): void {
        this.app.use(cors());
        this.app.use('/api/products', productRouter);
        this.app.use('/api/categories', categoryRouter);
        this.app.use('/api/users', userRouter);
    }
    config(): void {
        env.config();
    }

    start(): void {
        this.app.listen(process.env.PORT, async () => {
           await createConnection();
           
            console.log(`Server running on port ${process.env.PORT}`);
            
        })
    }
}


