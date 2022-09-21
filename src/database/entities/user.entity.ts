import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id_user: number;

    @Column()
    role: string;

    @Column()
    name: string;

    @Column()
    first_name: string;
}
