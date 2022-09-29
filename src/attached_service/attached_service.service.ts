import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateAttachedServiceDto } from './dto/create-attached_service.dto';
import { UpdateAttachedServiceDto } from './dto/update-attached_service.dto';
import { AttachedService } from './entities/attached_service.entity';

@Injectable()
export class AttachedServiceService {
    constructor(
        @InjectRepository(AttachedService)
        private readonly attachedServiceRepository: Repository<AttachedService>,
    ) {}

    async create(
        createAttachedServiceDto: CreateAttachedServiceDto,
    ): Promise<AttachedService> {
        return this.attachedServiceRepository.save(createAttachedServiceDto);
    }

    async findAll(): Promise<AttachedService[]> {
        return this.attachedServiceRepository.find();
    }

    async findOne(id: number): Promise<AttachedService> {
        return this.attachedServiceRepository.findOneBy({ id: id });
    }

    async update(
        id: number,
        updateAttachedServiceDto: UpdateAttachedServiceDto,
    ): Promise<UpdateResult> {
        return this.attachedServiceRepository.update(
            id,
            updateAttachedServiceDto,
        );
    }

    async remove(id: number): Promise<DeleteResult> {
        return this.attachedServiceRepository.delete(id);
    }
}
