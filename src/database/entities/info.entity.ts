import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Info {
    @PrimaryGeneratedColumn()
    id_info: number;

    @Column()
    id_category: number;

    @Column()
    name: string;
}
