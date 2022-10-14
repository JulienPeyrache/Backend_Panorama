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

@ApiTags("item")
@Controller("item")
export class ItemController {
	constructor(
		private readonly itemService: ItemService,
		private readonly attachedServiceService: AttachedServiceService
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

	@Get("findByAttachedServiceId/:id")
	findByAttachedServiceId(@Param("id") id: string) {
		return this.itemService.findByAttachedServiceId(+id);
	}

	@Get("findByServiceId/:id")
	async findByListAttachedServiceIds(@Param("id") id: string) {
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
