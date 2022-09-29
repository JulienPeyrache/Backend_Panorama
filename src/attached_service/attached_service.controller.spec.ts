import { Test, TestingModule } from '@nestjs/testing';
import { AttachedServiceController } from './attached_service.controller';
import { AttachedServiceService } from './attached_service.service';

describe('AttachedServiceController', () => {
    let controller: AttachedServiceController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AttachedServiceController],
            providers: [AttachedServiceService],
        }).compile();

        controller = module.get<AttachedServiceController>(
            AttachedServiceController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
