import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { GlossaryService } from "./glossary.service";
import { CreateGlossaryDto } from "./dto/create-glossary.dto";
import { UpdateGlossaryDto } from "./dto/update-glossary.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("glossary")
@Controller("glossary")
export class GlossaryController {
  constructor(private readonly glossaryService: GlossaryService) {}

  @Post()
  create(@Body() createGlossaryDto: CreateGlossaryDto) {
    return this.glossaryService.create(createGlossaryDto);
  }

  @Get()
  findAll() {
    return this.glossaryService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.glossaryService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateGlossaryDto: UpdateGlossaryDto
  ) {
    return this.glossaryService.update(+id, updateGlossaryDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.glossaryService.remove(+id);
  }
}
