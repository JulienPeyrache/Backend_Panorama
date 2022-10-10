import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from "@nestjs/common";
import { ValueItemSiteService } from "./value_item_site.service";
import { CreateValueItemSiteDto } from "./dto/create-value_item_site.dto";
import { UpdateValueItemSiteDto } from "./dto/update-value_item_site.dto";
import { ApiTags } from "@nestjs/swagger";


@ApiTags("value-item-site")
@Controller("value-item-site")
export class ValueItemSiteController {
	constructor(private readonly valueItemSiteService: ValueItemSiteService) {}

	@Post()
	create(@Body() createValueItemSiteDto: CreateValueItemSiteDto) {
		return this.valueItemSiteService.create(createValueItemSiteDto);
	}

	@Get()
	findAll() {
		return this.valueItemSiteService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.valueItemSiteService.findOne(+id);
	}

	@Get("/findBySiteId/:siteId")
	findWithIdsSite(@Param("siteId") siteId: string) {
		return this.valueItemSiteService.findBySiteId(+siteId);
	}

	@Patch(":id")
	update(
		@Param("id") id: string,
		@Body() updateValueItemSiteDto: UpdateValueItemSiteDto
	) {
		return this.valueItemSiteService.update(+id, updateValueItemSiteDto);
	}

	@Post("/updateAll")
	updateAll(
		@Body()
		listValuesItemSite: UpdateValueItemSiteDto[]
	) {
		for (const value of listValuesItemSite) {
			this.valueItemSiteService.update(+value.id, value);
		}
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.valueItemSiteService.remove(+id);
	}


  @Get("/findByItemId/:itemId")
   async findWithIds(@Param("itemId") itemId: string) {
    return this.valueItemSiteService.findByItemId(+itemId);
  }
}
