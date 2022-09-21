import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Info_site {
    @PrimaryGeneratedColumn()
    id_value: number;

    @Column()
    id_site: number;

    @Column()
    id_info: number;

    @Column()
    id_info_responsible: number;

    @Column()
    value: string;
}
