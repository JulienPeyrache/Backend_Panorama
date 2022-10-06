import { PartialType } from "@nestjs/swagger";
import { CreateValueEquipmentSiteDto } from "./create-value_equipment_site.dto";

export class UpdateValueEquipmentSiteDto extends PartialType(
  CreateValueEquipmentSiteDto
) {}
