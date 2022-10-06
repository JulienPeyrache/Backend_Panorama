import { Test, TestingModule } from "@nestjs/testing";
import { ValueEquipmentBuildingController } from "./value_equipment_building.controller";
import { ValueEquipmentBuildingService } from "./value_equipment_building.service";

describe("ValueEquipmentBuildingController", () => {
  let controller: ValueEquipmentBuildingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValueEquipmentBuildingController],
      providers: [ValueEquipmentBuildingService],
    }).compile();

    controller = module.get<ValueEquipmentBuildingController>(
      ValueEquipmentBuildingController
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
