import { Test, TestingModule } from "@nestjs/testing";
import { ValueEquipmentBuildingService } from "./value_equipment_building.service";

describe("ValueEquipmentBuildingService", () => {
  let service: ValueEquipmentBuildingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValueEquipmentBuildingService],
    }).compile();

    service = module.get<ValueEquipmentBuildingService>(
      ValueEquipmentBuildingService
    );
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
