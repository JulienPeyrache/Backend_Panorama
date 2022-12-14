import { TypologyBuilding } from "../../database/enum";

export class CreateBuildingDto {
	id: number;
	name_building: string;
	address: string;
	postal_code: number;
	city: string;
	typology_building: TypologyBuilding;
}
