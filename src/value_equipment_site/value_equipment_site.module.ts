import { Module } from '@nestjs/common';
import { ValueEquipmentSiteService } from './value_equipment_site.service';
import { ValueEquipmentSiteController } from './value_equipment_site.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValueEquipmentSite } from './entities/value_equipment_site.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ValueEquipmentSite])],
    controllers: [ValueEquipmentSiteController],
    providers: [ValueEquipmentSiteService],
})
export class ValueEquipmentSiteModule {}
