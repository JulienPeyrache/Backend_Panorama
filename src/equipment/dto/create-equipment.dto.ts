import { Step } from "../../database/enum";

export class CreateEquipmentDto {
	label_equipment: string;
	step?: Step;
}
