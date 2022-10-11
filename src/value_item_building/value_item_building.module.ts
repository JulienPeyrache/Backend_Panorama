import { Module } from "@nestjs/common";
import { ValueItemBuildingService } from "./value_item_building.service";
import { ValueItemBuildingController } from "./value_item_building.controller";
import { ValueItemBuilding } from "./entities/value_item_building.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
	imports: [TypeOrmModule.forFeature([ValueItemBuilding])],
	controllers: [ValueItemBuildingController],
	providers: [ValueItemBuildingService],
})
export class ValueItemBuildingModule {}
