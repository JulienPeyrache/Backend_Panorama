import { PartialType } from '@nestjs/swagger';
import { CreateAttachedServiceDto } from './create-attached_service.dto';

export class UpdateAttachedServiceDto extends PartialType(
    CreateAttachedServiceDto,
) {}
