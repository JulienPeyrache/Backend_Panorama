import { PartialType } from '@nestjs/swagger';
import { CreateValueEquipmentBuildingDto } from './create-value_equipment_building.dto';

export class UpdateValueEquipmentBuildingDto extends PartialType(CreateValueEquipmentBuildingDto) {}
