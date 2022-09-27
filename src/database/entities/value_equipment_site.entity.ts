import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Equipment } from './equipment.entity';
import { Site } from './site.entity';

@Entity()
export class ValueEquipmentSite {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    description: string;

    @ManyToOne(() => Site, (site) => site.id_site)
    site: Site;

    @ManyToOne(() => Equipment, (equipment) => equipment.id)
    equipment: Equipment;
}
