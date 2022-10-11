import { Item } from "src/item/entities/item.entity";
import { Building } from "src/building/entities/building.entity";

export class CreateValueItemBuildingDto {
	description: string;
	building: Building;
	item: Item;
}
