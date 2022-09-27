import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { ValueEquipmentSite } from './value_equipment_site.entity';

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

    @OneToMany(() => ValueEquipmentSite, (id_site) => ValueEquipmentSite.site)
    site: ValueEquipmentSite[];
}
