import { AttachedService } from 'src/attached_service/entities/attached_service.entity';

export class CreateItemDto {
    label_item: string;
    default_value?: string;
    is_occupant_info: boolean;
    attachedService: AttachedService;
}
