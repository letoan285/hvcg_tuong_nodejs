import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import { Category } from "./Category";

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
    list_price: number;

    @Column()
    is_new: boolean;

    @Column()
    category_id: number;

    @Column({nullable: true})
    image: string;

    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    status: number;

    @ManyToOne(() => Category, category => category.products)
    category: Category;

}
