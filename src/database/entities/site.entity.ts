import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { ValueEquipmentSite } from './value_equipment_site.entity';

@Entity()
export class Site {
    @PrimaryColumn()
    id: number;

    @Column()
    typology_site: string;

    @Column()
    immo: string;

    @Column()
    ET_organisation: string;

    @Column()
    is_courrier: boolean;

    @Column()
    comments: string;

    @OneToMany(
        () => ValueEquipmentSite,
        (valuesEquipmentSite) => valuesEquipmentSite.site,
    )
    valuesEquipmentSite: ValueEquipmentSite[];
}
