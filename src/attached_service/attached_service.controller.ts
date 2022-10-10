import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from "@nestjs/common";
import { AttachedServiceService } from "./attached_service.service";
import { CreateAttachedServiceDto } from "./dto/create-attached_service.dto";
import { UpdateAttachedServiceDto } from "./dto/update-attached_service.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("attached-service")
@Controller("attached-service")
export class AttachedServiceController {
	constructor(
		private readonly attachedServiceService: AttachedServiceService
	) {}

	@Post()
	create(@Body() createAttachedServiceDto: CreateAttachedServiceDto) {
		return this.attachedServiceService.create(createAttachedServiceDto);
	}

	@Get()
	findAll() {
		return this.attachedServiceService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.attachedServiceService.findOne(+id);
	}

	@Get("findByServiceId/:serviceId")
	findByServiceId(@Param("serviceId") serviceId: string) {
		return this.attachedServiceService.findByServiceId(+serviceId);
	}

	@Get("findByServiceAndLabel/:serviceId/:label")
	findByServiceAndLabel(
		@Param("serviceId") serviceId: string,
		@Param("label") label: string
	) {
		return this.attachedServiceService.findByServiceAndLabel(+serviceId, label);
	}

	@Patch(":id")
	update(
		@Param("id") id: string,
		@Body() updateAttachedServiceDto: UpdateAttachedServiceDto
	) {
		return this.attachedServiceService.update(+id, updateAttachedServiceDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.attachedServiceService.remove(+id);
	}

	@Patch(":id/addToSite/:siteId")
	addToSite(@Param("id") id: string, @Param("siteId") siteId: string) {
		return this.attachedServiceService.addToSite(+id, +siteId);
	}

	@Patch(":id/removeFromSite/:siteId")
	removeFromSite(@Param("id") id: string, @Param("siteId") siteId: string) {
		return this.attachedServiceService.removeFromSite(+id, +siteId);
	}

	@Get(":id/isOnSite/:siteId")
	isOnSite(@Param("id") id: string, @Param("siteId") siteId: string) {
		return this.attachedServiceService.isOnSite(+id, +siteId);
	}

	@Post("areOnSite/:siteId")
	async areOnSite(
		@Param("siteId") siteId: string,
		@Body() attachedServices: UpdateAttachedServiceDto[]
	) {
		let res: boolean[] = [];
		for (const attachedService of attachedServices) {
			const isOnSite = await this.attachedServiceService.isOnSite(
				attachedService.id,
				+siteId
			);
			isOnSite !== null ? res.push(true) : res.push(false);
		}
		return res;
	}
}
