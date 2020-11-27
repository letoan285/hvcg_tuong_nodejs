import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
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

}
