import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from "@nestjs/common";
import { ValueItemBuildingService } from "./value_item_building.service";
import { CreateValueItemBuildingDto } from "./dto/create-value_item_building.dto";
import { UpdateValueItemBuildingDto } from "./dto/update-value_item_building.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("value-item-building")
@Controller("value-item-building")
export class ValueItemBuildingController {
	constructor(
		private readonly valueItemBuildingService: ValueItemBuildingService
	) {}

	@Post()
	create(@Body() createValueItemBuildingDto: CreateValueItemBuildingDto) {
		return this.valueItemBuildingService.create(createValueItemBuildingDto);
	}

	@Get()
	findAll() {
		return this.valueItemBuildingService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.valueItemBuildingService.findOne(+id);
	}

	@Get("/findByBuildingId/:buildingId")
	findByBuildingId(@Param("buildingId") buildingId: string) {
		return this.valueItemBuildingService.findByBuildingId(+buildingId);
	}

	@Patch(":id")
	update(
		@Param("id") id: string,
		@Body() updateValueItemBuildingDto: UpdateValueItemBuildingDto
	) {
		return this.valueItemBuildingService.update(
			+id,
			updateValueItemBuildingDto
		);
	}

	@Post("/updateAll")
	updateAll(
		@Body()
		listValuesItemBuilding: any[]
	) {
		for (const value of listValuesItemBuilding) {
			if (value.id) {
				this.valueItemBuildingService.update(+value.id, value);
			} else {
				this.valueItemBuildingService.create(value);
			}
		}
	}

	@Post("/deleteAll")
	removeAll(
		@Body()
		listValuesItemBuilding: UpdateValueItemBuildingDto[]
	) {
		for (const value of listValuesItemBuilding) {
			this.valueItemBuildingService.remove(+value.id);
		}
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.valueItemBuildingService.remove(+id);
	}

	@Get("/findByItemId/:itemId")
	async findWithIds(@Param("itemId") itemId: string) {
		return this.valueItemBuildingService.findByItemId(+itemId);
	}
}
