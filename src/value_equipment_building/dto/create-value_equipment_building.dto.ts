import { Building } from 'src/building/entities/building.entity';
import { Equipment } from 'src/equipment/entities/equipment.entity';

export class CreateValueEquipmentBuildingDto {
    description: string;
    equipment: Equipment;
    building: Building;
}
