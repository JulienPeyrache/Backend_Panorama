import { Module } from '@nestjs/common';
import { ValueItemSiteService } from './value_item_site.service';
import { ValueItemSiteController } from './value_item_site.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValueItemSite } from './entities/value_item_site.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ValueItemSite])],
    controllers: [ValueItemSiteController],
    providers: [ValueItemSiteService],
})
export class ValueItemSiteModule {}
