import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Value_Equipment_Site {
    @PrimaryGeneratedColumn("uuid")
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
