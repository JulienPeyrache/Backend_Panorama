import { Equipment } from "src/equipment/entities/equipment.entity";
import { Site } from "src/site/entities/site.entity";

export class CreateValueEquipmentSiteDto {
  description: string;
  equipment: Equipment;
  site: Site;
}
