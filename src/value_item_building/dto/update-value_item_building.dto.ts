import { PartialType } from "@nestjs/swagger";
import { CreateValueItemBuildingDto } from "./create-value_item_building.dto";

export class UpdateValueItemBuildingDto extends PartialType(
	CreateValueItemBuildingDto
) {
	id?: number;
}
