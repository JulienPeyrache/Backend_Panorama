import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from "@nestjs/common";
import { EquipmentService } from "./equipment.service";
import { CreateEquipmentDto } from "./dto/create-equipment.dto";
import { UpdateEquipmentDto } from "./dto/update-equipment.dto";
import { ApiTags } from "@nestjs/swagger";
import { Step } from "../database/enum";
import { ValueEquipmentBuildingService } from "../value_equipment_building/value_equipment_building.service";

@ApiTags("equipment")
@Controller("equipment")
export class EquipmentController {
	constructor(
		private readonly equipmentService: EquipmentService,
		private readonly valueEquipmentBuildingService: ValueEquipmentBuildingService
	) {}

	@Post()
	create(@Body() createEquipmentDto: CreateEquipmentDto) {
		return this.equipmentService.create(createEquipmentDto);
	}

	@Get()
	findAll() {
		return this.equipmentService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.equipmentService.findOne(+id);
	}

	@Get("findByStep/:step/inBuilding/:buildingId")
	async findByStepInBuilding(
		@Param("step") step: Step,
		@Param("buildingId") buildingId: string
	) {
		let availableEquipments = [];
		const equipments = await this.equipmentService.findByStep(step);
		for (const equipment of equipments) {
			const value =
				await this.valueEquipmentBuildingService.findByEquipmentAndBuildingId(
					equipment.id,
					+buildingId
				);
			if (value) {
				availableEquipments.push({
					...equipment,
					description: value.description,
				});
			}
		}
		return availableEquipments;
	}

	@Get("findByStep/:step")
	async findByStep(@Param("step") step: Step) {
		return this.equipmentService.findByStep(step);
	}

	@Patch(":id")
	update(
		@Param("id") id: string,
		@Body() updateEquipmentDto: UpdateEquipmentDto
	) {
		return this.equipmentService.update(+id, updateEquipmentDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.equipmentService.remove(+id);
	}
}
