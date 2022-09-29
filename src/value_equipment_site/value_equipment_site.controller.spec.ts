import { Test, TestingModule } from '@nestjs/testing';
import { ValueEquipmentSiteController } from './value_equipment_site.controller';
import { ValueEquipmentSiteService } from './value_equipment_site.service';

describe('ValueEquipmentSiteController', () => {
    let controller: ValueEquipmentSiteController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ValueEquipmentSiteController],
            providers: [ValueEquipmentSiteService],
        }).compile();

        controller = module.get<ValueEquipmentSiteController>(
            ValueEquipmentSiteController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
