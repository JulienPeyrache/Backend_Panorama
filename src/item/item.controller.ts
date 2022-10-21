import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from "@nestjs/common";
import { ItemService } from "./item.service";
import { AttachedServiceService } from "../attached_service/attached_service.service";
import { CreateItemDto } from "./dto/create-item.dto";
import { UpdateItemDto } from "./dto/update-item.dto";
import { ApiTags } from "@nestjs/swagger";
import { Step } from "../database/enum";
import { ValueItemBuildingService } from "../value_item_building/value_item_building.service";

@ApiTags("item")
@Controller("item")
export class ItemController {
	constructor(
		private readonly itemService: ItemService,
		private readonly attachedServiceService: AttachedServiceService,
		private readonly valueItemBuildingService: ValueItemBuildingService
	) {}

	@Post()
	create(@Body() createItemDto: CreateItemDto) {
		return this.itemService.create(createItemDto);
	}

	@Get()
	findAll() {
		return this.itemService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.itemService.findOne(+id);
	}

	@Get("findByStep/:step/inBuilding/:buildingId")
	async findByStepInBuilding(
		@Param("step") step: Step,
		@Param("buildingId") buildingId: string
	) {
		let availableItems = [];
		const items = await this.itemService.findByStep(step);
		for (const item of items) {
			const value = await this.valueItemBuildingService.findByItemAndBuildingId(
				item.id,
				+buildingId
			);
			if (value) {
				availableItems.push({ ...item, description: value.description });
			}
		}
		return availableItems;
	}

	@Get("findByAttachedServiceId/:id")
	findByAttachedServiceId(@Param("id") id: string) {
		return this.itemService.findByAttachedServiceId(+id);
	}

	@Get("findCommonByServiceId/:id")
	async findCommonByServiceId(@Param("id") id: string) {
		let items = [];
		const attachedServiceCommon =
			await this.attachedServiceService.findByServiceAndLabel(+id, "Commun");
		return this.itemService.findByAttachedServiceId(attachedServiceCommon.id);
	}

	@Get("findSpecificByServiceId/:id")
	async findSpecificByServiceId(@Param("id") id: string) {
		let items = [];
		const attachedServices = await this.attachedServiceService.findByServiceId(
			+id
		);
		const listIds = attachedServices.map(
			(attachedService) => attachedService.id
		);
		for (const id of listIds) {
			const newItems = await this.itemService.findByAttachedServiceId(+id);
			items.push(...newItems);
		}
		return items;
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateItemDto: UpdateItemDto) {
		return this.itemService.update(+id, updateItemDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.itemService.remove(+id);
	}
}
