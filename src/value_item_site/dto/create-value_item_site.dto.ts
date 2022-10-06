import { Item } from "src/item/entities/item.entity";
import { Site } from "src/site/entities/site.entity";

export class CreateValueItemSiteDto {
  description: string;
  site: Site;
  item: Item;
}
