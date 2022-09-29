import { TypologyBuilding } from '../entities/building.entity';

export class CreateBuildingDto {
    name_building: string;
    address: string;
    postal_code: number;
    city: string;
    typology_building: TypologyBuilding;
}
