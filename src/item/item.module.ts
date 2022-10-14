import { Module } from "@nestjs/common";
import { ItemService } from "./item.service";
import { ItemController } from "./item.controller";
import { Item } from "./entities/item.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AttachedServiceModule } from "../attached_service/attached_service.module";

@Module({
	imports: [TypeOrmModule.forFeature([Item]), AttachedServiceModule],
	controllers: [ItemController],
	providers: [ItemService],
})
export class ItemModule {}
