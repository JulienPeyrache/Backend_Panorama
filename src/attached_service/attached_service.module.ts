import { Module } from "@nestjs/common";
import { AttachedServiceService } from "./attached_service.service";
import { AttachedServiceController } from "./attached_service.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AttachedService } from "./entities/attached_service.entity";
import { Building } from "../building/entities/building.entity";

@Module({
	imports: [TypeOrmModule.forFeature([AttachedService, Building])],
	controllers: [AttachedServiceController],
	providers: [AttachedServiceService],
})
export class AttachedServiceModule {}
