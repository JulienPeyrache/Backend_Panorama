import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from "@nestjs/common";
import { SiteService } from "./site.service";
import { CreateSiteDto } from "./dto/create-site.dto";
import { UpdateSiteDto } from "./dto/update-site.dto";
import { ApiTags } from "@nestjs/swagger";
import { Site } from "./entities/site.entity";
import { Building } from "src/building/entities/building.entity";
import { BuildingService } from "src/building/building.service";

@ApiTags("site")
@Controller("site")
export class SiteController {
	constructor(
		private readonly siteService: SiteService,
		private readonly buildingService: BuildingService
	) {}

	@Post()
	create(@Body() createSiteDto: CreateSiteDto) {
		return this.siteService.create(createSiteDto);
	}

	@Get()
	findAll() {
		return this.siteService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.siteService.findOne(+id);
	}

	@Post("listBuildingsLinked")
	async listBuildingsLinked() {
		const listSites: Site[] = await this.siteService.findAll();
		const listBuildingsLinked: Building[] = [];
		for (const site of listSites) {
			const building: Building = await this.buildingService.findOne(
				site.buildingId
			);
			listBuildingsLinked.push(building);
		}
		return listBuildingsLinked;
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateSiteDto: UpdateSiteDto) {
		return this.siteService.update(+id, updateSiteDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.siteService.remove(+id);
	}

	@Get("/findByBuildingId/:buildingId")
	findWithIds(@Param("buildingId") buildingId: string) {
		return this.siteService.findByBuildingId(+buildingId);
	}
}
