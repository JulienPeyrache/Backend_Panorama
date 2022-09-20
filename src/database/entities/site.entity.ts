import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Site {
    @PrimaryColumn()
    id_site: number;

    @Column()
    id_building: number;

    @Column()
    typology_site: string;

    @Column()
    immo: string;

    @Column()
    ET_organisation: string;

    @Column()
    id_site_responsible: number;

    @Column()
    id_collecter: number;

    @Column()
    comments: string;
}
