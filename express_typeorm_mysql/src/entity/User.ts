import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import bcrypt from 'bcryptjs';

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    status: number;
}
