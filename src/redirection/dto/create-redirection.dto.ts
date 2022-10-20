import { Step } from "../../database/enum";

export class CreateRedirectionDto {
	step?: Step;
	label: string;
	url: string;
}
