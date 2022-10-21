import { Module } from "@nestjs/common";
import { ItemService } from "./item.service";
import { ItemController } from "./item.controller";
import { Item } from "./entities/item.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AttachedServiceModule } from "../attached_service/attached_service.module";
import { ValueItemBuildingModule } from "../value_item_building/value_item_building.module";

@Module({
	imports: [
		TypeOrmModule.forFeature([Item]),
		AttachedServiceModule,
		ValueItemBuildingModule,
	],
	controllers: [ItemController],
	providers: [ItemService],
})
export class ItemModule {}
