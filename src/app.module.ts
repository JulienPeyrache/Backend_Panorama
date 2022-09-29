import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from './course/course.module';
import { ServiceModule } from './service/service.module';
import { AttachedServiceModule } from './attached_service/attached_service.module';
import { GlossaryModule } from './glossary/glossary.module';
import { ItemModule } from './item/item.module';
import { EquipmentModule } from './equipment/equipment.module';
import { BuildingModule } from './building/building.module';
import { SiteModule } from './site/site.module';
import { ValueItemSiteModule } from './value_item_site/value_item_site.module';
import ormConfigOptions from './database/typeormoptions.config';

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
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
