import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity('products')
export class Product  extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    slug: string;

    @Column()
    price: number;

    @Column()
    category_id: number;

    @Column({nullable: true})
    image: string;

    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    status: number;

}
