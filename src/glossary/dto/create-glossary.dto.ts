import { Service } from 'src/service/entities/service.entity';

export class CreateGlossaryDto {
    keyword: string;
    definition: string;
    service: Service;
}
