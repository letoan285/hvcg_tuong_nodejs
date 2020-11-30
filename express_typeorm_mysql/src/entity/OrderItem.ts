import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity('order_items')
export class OrderItem {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    order_id: number;

    @Column()
    product_id: number;

    @Column({nullable: true})
    status: number;

}
