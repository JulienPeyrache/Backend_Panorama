import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseModule } from "./course/course.module";
import { ServiceModule } from "./service/service.module";
import { AttachedServiceModule } from "./attached_service/attached_service.module";
import { ItemModule } from "./item/item.module";
import { EquipmentModule } from "./equipment/equipment.module";
import { BuildingModule } from "./building/building.module";
import { ValueEquipmentBuildingModule } from "./value_equipment_building/value_equipment_building.module";
import { ValueItemBuildingModule } from "./value_item_building/value_item_building.module";
import { RedirectionModule } from './redirection/redirection.module';
import ormConfigOptions from "./database/typeormoptions.config";

@Module({
	imports: [
		TypeOrmModule.forRoot(ormConfigOptions),
		CourseModule,
		ServiceModule,
		AttachedServiceModule,
		ItemModule,
		EquipmentModule,
		BuildingModule,
		ValueEquipmentBuildingModule,
		ValueItemBuildingModule,
		RedirectionModule,
	],
})
export class AppModule {}
