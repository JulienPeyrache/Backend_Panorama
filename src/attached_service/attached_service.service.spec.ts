import { Test, TestingModule } from "@nestjs/testing";
import { AttachedServiceService } from "./attached_service.service";

describe("AttachedServiceService", () => {
  let service: AttachedServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttachedServiceService],
    }).compile();

    service = module.get<AttachedServiceService>(AttachedServiceService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
