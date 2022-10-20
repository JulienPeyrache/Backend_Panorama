import { AttachedService } from "src/attached_service/entities/attached_service.entity";
import { Step } from "../../database/enum";

export class CreateItemDto {
	label_item: string;
	is_occupant_info: boolean;
	label_userfriendly?: string;
	step?: Step;
	attachedService: AttachedService;
}
