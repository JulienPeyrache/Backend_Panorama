import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { AttachedServiceService } from './attached_service.service';
import { CreateAttachedServiceDto } from './dto/create-attached_service.dto';
import { UpdateAttachedServiceDto } from './dto/update-attached_service.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('attached-service')
@Controller('attached-service')
export class AttachedServiceController {
    constructor(
        private readonly attachedServiceService: AttachedServiceService,
    ) {}

    @Post()
    create(@Body() createAttachedServiceDto: CreateAttachedServiceDto) {
        return this.attachedServiceService.create(createAttachedServiceDto);
    }

    @Get()
    findAll() {
        return this.attachedServiceService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.attachedServiceService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateAttachedServiceDto: UpdateAttachedServiceDto,
    ) {
        return this.attachedServiceService.update(
            +id,
            updateAttachedServiceDto,
        );
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.attachedServiceService.remove(+id);
    }
}
