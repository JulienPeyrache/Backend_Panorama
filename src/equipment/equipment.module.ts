import { Module } from "@nestjs/common";
import { EquipmentService } from "./equipment.service";
import { EquipmentController } from "./equipment.controller";
import { Equipment } from "./entities/equipment.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ValueEquipmentBuildingModule } from "../value_equipment_building/value_equipment_building.module";

@Module({
	imports: [
		TypeOrmModule.forFeature([Equipment]),
		ValueEquipmentBuildingModule,
	],
	controllers: [EquipmentController],
	providers: [EquipmentService],
})
export class EquipmentModule {}
