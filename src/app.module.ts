import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseModule } from "./course/course.module";
import { ServiceModule } from "./service/service.module";
import { AttachedServiceModule } from "./attached_service/attached_service.module";
import { GlossaryModule } from "./glossary/glossary.module";
import { ItemModule } from "./item/item.module";
import { EquipmentModule } from "./equipment/equipment.module";
import { BuildingModule } from "./building/building.module";
import { SiteModule } from "./site/site.module";
import { ValueItemSiteModule } from "./value_item_site/value_item_site.module";
import { ValueEquipmentSiteModule } from "./value_equipment_site/value_equipment_site.module";
import { ValueEquipmentBuildingModule } from "./value_equipment_building/value_equipment_building.module";
import ormConfigOptions from "./database/typeormoptions.config";

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfigOptions),
    CourseModule,
    ServiceModule,
    AttachedServiceModule,
    GlossaryModule,
    ItemModule,
    EquipmentModule,
    BuildingModule,
    SiteModule,
    ValueItemSiteModule,
    ValueEquipmentSiteModule,
    ValueEquipmentBuildingModule,
  ],
})
export class AppModule {}
