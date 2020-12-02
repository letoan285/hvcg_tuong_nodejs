import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity('carts')
export class Cart {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    user_id: number;

    @Column()
    product_id: number;

    @Column()
    quantity: number;

}
