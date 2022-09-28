import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Equipment } from './equipment.entity';
import { Site } from './site.entity';

@Entity()
export class ValueEquipmentSite {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @ManyToOne(() => Site, (site) => site.valuesEquipmentSite)
    site: Site;

    @ManyToOne(() => Equipment, (equipment) => equipment.valuesEquipmentSite)
    equipment: Equipment;
}
