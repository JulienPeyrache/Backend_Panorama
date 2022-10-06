import { Module } from "@nestjs/common";
import { SiteService } from "./site.service";
import { SiteController } from "./site.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Site } from "./entities/site.entity";
import { BuildingModule } from "src/building/building.module";

@Module({
  imports: [TypeOrmModule.forFeature([Site]), BuildingModule],
  controllers: [SiteController],
  providers: [SiteService],
})
export class SiteModule {}
