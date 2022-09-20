import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Equipment_site {
    @PrimaryGeneratedColumn()
    id_value: number;

    @Column()
    id_site: number;

    @Column()
    id_equipment: number;

    @Column()
    value: string;

    @Column()
    id_info_responsible: number;
}
