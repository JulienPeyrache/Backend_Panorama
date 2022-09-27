import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { ValueEquipmentBuilding } from './value_equipment_building.entity';

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

    @Column()
    typology_building: string;

    @OneToMany(
        () => ValueEquipmentBuilding,
        (valuesEquipmentBuilding) => valuesEquipmentBuilding.building,
    )
    valuesEquipmentBuilding: ValueEquipmentBuilding[];
}
