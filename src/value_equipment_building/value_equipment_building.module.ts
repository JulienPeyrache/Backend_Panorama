import { Module } from "@nestjs/common";
import { ValueEquipmentBuildingService } from "./value_equipment_building.service";
import { ValueEquipmentBuildingController } from "./value_equipment_building.controller";
import { ValueEquipmentBuilding } from "./entities/value_equipment_building.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([ValueEquipmentBuilding])],
  controllers: [ValueEquipmentBuildingController],
  providers: [ValueEquipmentBuildingService],
})
export class ValueEquipmentBuildingModule {}
