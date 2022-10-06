import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Item } from "../../item/entities/item.entity";
import { Site } from "../../site/entities/site.entity";

@Entity()
export class ValueItemSite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  siteId: number;

  @Column()
  itemId: number;

  @ManyToOne(() => Site, (site) => site.valuesItemSite)
  site: Site;

  @ManyToOne(() => Item, (item) => item.valuesItemSite)
  item: Item;
}
