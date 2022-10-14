import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Item } from "../../item/entities/item.entity";
import { Building } from "../../building/entities/building.entity";

@Entity()
export class ValueItemBuilding {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	description: string;

	@Column()
	buildingId: number;

	@Column()
	itemId: number;

	@ManyToOne(() => Building, (building) => building.valuesItemBuilding, {
		onDelete: "CASCADE",
	})
	building: Building;

	@ManyToOne(() => Item, (item) => item.valuesItemBuilding, {
		onDelete: "CASCADE",
	})
	item: Item;
}
