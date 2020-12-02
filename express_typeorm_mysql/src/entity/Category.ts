import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from "typeorm";
import { Product } from "./Product";
interface ICategory {
    id?: number;
    name: string;

    slug?: string;

    parent_id?: number;

    image?: string;

    description?: string;

    status?: number;
}

@Entity('categories')
export class Category  extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    slug: string;

    @Column()
    parent_id: number;

    @Column({nullable: true})
    image: string;

    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    status: number;

    @OneToMany(() => Product, product => product.category)
    products: Product[];

}
