import { Test, TestingModule } from "@nestjs/testing";
import { ValueEquipmentSiteService } from "./value_equipment_site.service";

describe("ValueEquipmentSiteService", () => {
  let service: ValueEquipmentSiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValueEquipmentSiteService],
    }).compile();

    service = module.get<ValueEquipmentSiteService>(ValueEquipmentSiteService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
