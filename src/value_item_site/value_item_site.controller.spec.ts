import { Test, TestingModule } from '@nestjs/testing';
import { ValueItemSiteController } from './value_item_site.controller';
import { ValueItemSiteService } from './value_item_site.service';

describe('ValueItemSiteController', () => {
    let controller: ValueItemSiteController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ValueItemSiteController],
            providers: [ValueItemSiteService],
        }).compile();

        controller = module.get<ValueItemSiteController>(
            ValueItemSiteController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
