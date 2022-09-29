import { PartialType } from '@nestjs/swagger';
import { CreateValueItemSiteDto } from './create-value_item_site.dto';

export class UpdateValueItemSiteDto extends PartialType(CreateValueItemSiteDto) {}
