import { Test, TestingModule } from '@nestjs/testing';
import { ValueItemBuildingController } from './value_item_building.controller';
import { ValueItemBuildingService } from './value_item_building.service';

describe('ValueItemBuildingController', () => {
  let controller: ValueItemBuildingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValueItemBuildingController],
      providers: [ValueItemBuildingService],
    }).compile();

    controller = module.get<ValueItemBuildingController>(ValueItemBuildingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
