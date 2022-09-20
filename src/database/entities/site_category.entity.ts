import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category_service {
    @PrimaryGeneratedColumn()
    id_site_category: number;

    @Column()
    id_site: number;

    @Column()
    id_category: number;

    @Column()
    is_included: boolean;
}
