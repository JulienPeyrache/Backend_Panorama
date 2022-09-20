import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Building {
    @PrimaryColumn()
    id_building: number;

    @Column()
    adress: string;

    @Column()
    postal_code: number;

    @Column()
    typology_building: string;

    @Column()
    city: string;
}
