import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateValueEquipmentBuildingDto } from './dto/create-value_equipment_building.dto';
import { UpdateValueEquipmentBuildingDto } from './dto/update-value_equipment_building.dto';
import { ValueEquipmentBuilding } from './entities/value_equipment_building.entity';

@Injectable()
export class ValueEquipmentBuildingService {
    constructor(
        @InjectRepository(ValueEquipmentBuilding)
        private readonly valueEquipmentBuildingValueEquipmentBuildingRepository: Repository<ValueEquipmentBuilding>,
    ) {}

    async create(
        createValueEquipmentBuildingDto: CreateValueEquipmentBuildingDto,
    ): Promise<ValueEquipmentBuilding> {
        return this.valueEquipmentBuildingValueEquipmentBuildingRepository.save(
            createValueEquipmentBuildingDto,
        );
    }

    async findAll(): Promise<ValueEquipmentBuilding[]> {
        return this.valueEquipmentBuildingValueEquipmentBuildingRepository.find();
    }

    async findOne(id: number): Promise<ValueEquipmentBuilding> {
        return this.valueEquipmentBuildingValueEquipmentBuildingRepository.findOneBy(
            { id: id },
        );
    }

    async update(
        id: number,
        updateValueEquipmentBuildingDto: UpdateValueEquipmentBuildingDto,
    ): Promise<UpdateResult> {
        return this.valueEquipmentBuildingValueEquipmentBuildingRepository.update(
            id,
            updateValueEquipmentBuildingDto,
        );
    }

    async remove(id: number): Promise<DeleteResult> {
        return this.valueEquipmentBuildingValueEquipmentBuildingRepository.delete(
            id,
        );
    }
}
