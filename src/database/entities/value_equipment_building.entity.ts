import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Equipment } from './equipment.entity';
import { Building } from './building.entity';

@Entity()
export class ValueEquipmentBuilding {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    description: string;

    @ManyToOne(() => Building, (building) => building.valuesEquipmentBuilding)
    building: Building;

    @ManyToOne(() => Equipment, (equipment) => equipment.valuesEquipmentBuilding)
    equipment: Equipment;
}
