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

	@Patch(":id/addToBuilding/:buildingId")
	addToBuilding(
		@Param("id") id: string,
		@Param("buildingId") buildingId: string
	) {
		return this.attachedServiceService.addToBuilding(+id, +buildingId);
	}

	@Post("addAllToBuilding/:buildingId")
	addAllToBuilding(
		@Param("buildingId") buildingId: string,
		@Body() attachedServices: UpdateAttachedServiceDto[]
	) {
		for (const attachedService of attachedServices) {
			this.attachedServiceService.addToBuilding(
				+attachedService.id,
				+buildingId
			);
		}
	}

	@Post("deleteAllFromBuilding/:buildingId")
	deleteAllFromBuilding(
		@Param("buildingId") buildingId: string,
		@Body() attachedServices: UpdateAttachedServiceDto[]
	) {
		for (const attachedService of attachedServices) {
			this.attachedServiceService.removeFromBuilding(
				+attachedService.id,
				+buildingId
			);
		}
	}

	@Patch(":id/removeFromBuilding/:buildingId")
	removeFromBuilding(
		@Param("id") id: string,
		@Param("buildingId") buildingId: string
	) {
		return this.attachedServiceService.removeFromBuilding(+id, +buildingId);
	}

	@Patch("removeAllFromBuilding/:buildingId")
	async removeAllFromBuilding(@Param("buildingId") buildingId: string) {
		const attachedServices =
			await this.attachedServiceService.findWithBuildingId(+buildingId);
		for (const attachedService of attachedServices) {
			this.attachedServiceService.removeFromBuilding(
				attachedService.id,
				+buildingId
			);
		}
	}

	@Get(":id/isOnBuilding/:buildingId")
	isOnBuilding(
		@Param("id") id: string,
		@Param("buildingId") buildingId: string
	) {
		return this.attachedServiceService.isOnBuilding(+id, +buildingId);
	}

	@Post("areOnBuilding/:buildingId")
	async areOnBuilding(
		@Param("buildingId") buildingId: string,
		@Body() attachedServices: UpdateAttachedServiceDto[]
	) {
		let res: boolean[] = [];
		for (const attachedService of attachedServices) {
			try {
				const isOnBuilding: any =
					await this.attachedServiceService.isOnBuilding(
						attachedService.id,
						+buildingId
					);
				res.push(true);
			} catch (err) {
				res.push(false);
			}
		}
		return res;
	}

	@Get("/findByServiceId/:serviceId")
	findWithIds(@Param("serviceId") serviceId: string) {
		return this.attachedServiceService.findByServiceId(+serviceId);
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
}
