import { Test, TestingModule } from '@nestjs/testing';
import { ValueItemBuildingService } from './value_item_building.service';

describe('ValueItemBuildingService', () => {
  let service: ValueItemBuildingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValueItemBuildingService],
    }).compile();

    service = module.get<ValueItemBuildingService>(ValueItemBuildingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
