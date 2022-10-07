import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from "@nestjs/common";
import { ValueEquipmentSiteService } from "./value_equipment_site.service";
import { CreateValueEquipmentSiteDto } from "./dto/create-value_equipment_site.dto";
import { UpdateValueEquipmentSiteDto } from "./dto/update-value_equipment_site.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("value-equipment-site")
@Controller("value-equipment-site")
export class ValueEquipmentSiteController {
	constructor(
		private readonly valueEquipmentSiteService: ValueEquipmentSiteService
	) {}

	@Post()
	create(@Body() createValueEquipmentSiteDto: CreateValueEquipmentSiteDto) {
		return this.valueEquipmentSiteService.create(createValueEquipmentSiteDto);
	}

	@Get()
	findAll() {
		return this.valueEquipmentSiteService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.valueEquipmentSiteService.findOne(+id);
	}

	@Get("/findBySiteId/:siteId")
	findWithIds(@Param("siteId") siteId: string) {
		return this.valueEquipmentSiteService.findBySiteId(+siteId);
	}

	@Patch(":id")
	update(
		@Param("id") id: string,
		@Body() updateValueEquipmentSiteDto: UpdateValueEquipmentSiteDto
	) {
		return this.valueEquipmentSiteService.update(
			+id,
			updateValueEquipmentSiteDto
		);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.valueEquipmentSiteService.remove(+id);
	}
}
