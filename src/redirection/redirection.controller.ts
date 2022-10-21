import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from "@nestjs/common";
import { RedirectionService } from "./redirection.service";
import { CreateRedirectionDto } from "./dto/create-redirection.dto";
import { UpdateRedirectionDto } from "./dto/update-redirection.dto";
import { ApiTags } from "@nestjs/swagger";
import { Step } from "../database/enum";

@ApiTags("redirection")
@Controller("redirection")
export class RedirectionController {
	constructor(private readonly redirectionService: RedirectionService) {}

	@Post()
	create(@Body() createRedirectionDto: CreateRedirectionDto) {
		return this.redirectionService.create(createRedirectionDto);
	}

	@Get()
	findAll() {
		return this.redirectionService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.redirectionService.findOne(+id);
	}

	@Get("findByStep/:step")
	findByStep(@Param("step") step: Step) {
		return this.redirectionService.findByStep(step);
	}

	@Patch(":id")
	update(
		@Param("id") id: string,
		@Body() updateRedirectionDto: UpdateRedirectionDto
	) {
		return this.redirectionService.update(+id, updateRedirectionDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.redirectionService.remove(+id);
	}
}
