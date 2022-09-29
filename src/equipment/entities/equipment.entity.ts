import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ValueEquipmentSite } from '../../database/entities/value_equipment_site.entity';
import { ValueEquipmentBuilding } from '../../database/entities/value_equipment_building.entity';

@Entity()
export class Equipment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label_equipment: string;

    @OneToMany(
        () => ValueEquipmentSite,
        (valuesEquipmentSite) => valuesEquipmentSite.equipment,
    )
    valuesEquipmentSite: ValueEquipmentSite[];

    @OneToMany(
        () => ValueEquipmentBuilding,
        (valuesEquipmentBuilding) => valuesEquipmentBuilding.equipment,
    )
    valuesEquipmentBuilding: ValueEquipmentBuilding[];
}
