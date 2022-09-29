import { Test, TestingModule } from '@nestjs/testing';
import { ValueItemSiteService } from './value_item_site.service';

describe('ValueItemSiteService', () => {
    let service: ValueItemSiteService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ValueItemSiteService],
        }).compile();

        service = module.get<ValueItemSiteService>(ValueItemSiteService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
