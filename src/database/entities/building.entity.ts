import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { ValueEquipmentBuilding } from './value_equipment_building.entity';
import { Site } from './site.entity';

export enum TypologyBuilding {
    MIXTE = 'Mixte',
    PAP = 'PAP',
    TECHNIQUE = 'Technique',
    TERTIAIRE = 'Tertiaire',
}

@Entity()
export class Building {
    @PrimaryColumn()
    id: number;

    @Column()
    name_building: string;

    @Column()
    address: string;

    @Column()
    postal_code: number;

    @Column()
    city: string;

    @Column({ type: 'enum', enum: TypologyBuilding })
    typology_building: TypologyBuilding;

    @OneToMany(
        () => ValueEquipmentBuilding,
        (valuesEquipmentBuilding) => valuesEquipmentBuilding.building,
    )
    valuesEquipmentBuilding: ValueEquipmentBuilding[];

    @OneToMany(() => Site, (site) => site.building)
    sites: Site[];
}
