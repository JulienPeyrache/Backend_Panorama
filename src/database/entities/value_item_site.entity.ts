import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Item } from './item.entity';
import { Site } from './site.entity';

@Entity()
export class ValueItemSite {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    description: string;

    @ManyToOne(() => Site, (site) => site.valuesItemSite)
    site: Site;

    @ManyToOne(() => Item, (item) => item.valuesItemSite)
    item: Item;
}
