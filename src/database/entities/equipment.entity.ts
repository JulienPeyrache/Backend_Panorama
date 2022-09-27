import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ValueEquipmentSite } from './value_equipment_site.entity';

@Entity()
export class Equipment {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    label_equipment: string;

    @OneToMany(
        () => ValueEquipmentSite,
        (valuesEquipmentSite) => valuesEquipmentSite.equipment,
    )
    valuesEquipmentSite: ValueEquipmentSite[];
}
