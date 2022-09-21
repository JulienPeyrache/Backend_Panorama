import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category_service {
    @PrimaryGeneratedColumn()
    id_category: number;

    @Column()
    id_service: number;

    @Column()
    item: string;
}
