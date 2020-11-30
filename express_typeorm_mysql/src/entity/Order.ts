import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity('orders')
export class Order {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    customer_id: number;

    @Column()
    total: number;

    @Column({nullable: true})
    status: number;

}
