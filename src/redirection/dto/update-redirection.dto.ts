import { PartialType } from "@nestjs/swagger";
import { CreateRedirectionDto } from "./create-redirection.dto";

export class UpdateRedirectionDto extends PartialType(CreateRedirectionDto) {
	id?: number;
}
