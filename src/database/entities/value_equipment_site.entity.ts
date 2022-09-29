import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Equipment } from '../../equipment/entities/equipment.entity';
import { Site } from './site.entity';

@Entity()
export class ValueEquipmentSite {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    siteId: number;

    @Column()
    equipmentId: number;

    @ManyToOne(() => Site, (site) => site.valuesEquipmentSite)
    site: Site;

    @ManyToOne(() => Equipment, (equipment) => equipment.valuesEquipmentSite)
    equipment: Equipment;
}
