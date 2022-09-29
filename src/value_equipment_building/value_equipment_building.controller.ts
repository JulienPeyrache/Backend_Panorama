import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { ValueEquipmentBuildingService } from './value_equipment_building.service';
import { CreateValueEquipmentBuildingDto } from './dto/create-value_equipment_building.dto';
import { UpdateValueEquipmentBuildingDto } from './dto/update-value_equipment_building.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('value-equipment-building')
@Controller('value-equipment-building')
export class ValueEquipmentBuildingController {
    constructor(
        private readonly valueEquipmentBuildingService: ValueEquipmentBuildingService,
    ) {}

    @Post()
    create(
        @Body()
        createValueEquipmentBuildingDto: CreateValueEquipmentBuildingDto,
    ) {
        return this.valueEquipmentBuildingService.create(
            createValueEquipmentBuildingDto,
        );
    }

    @Get()
    findAll() {
        return this.valueEquipmentBuildingService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.valueEquipmentBuildingService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body()
        updateValueEquipmentBuildingDto: UpdateValueEquipmentBuildingDto,
    ) {
        return this.valueEquipmentBuildingService.update(
            +id,
            updateValueEquipmentBuildingDto,
        );
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.valueEquipmentBuildingService.remove(+id);
    }
}
