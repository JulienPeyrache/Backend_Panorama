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

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateValueItemSiteDto: UpdateValueItemSiteDto
  ) {
    return this.valueItemSiteService.update(+id, updateValueItemSiteDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.valueItemSiteService.remove(+id);
  }
}
