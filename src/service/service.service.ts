import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServiceService {
    constructor(
        @InjectRepository(Service)
        private readonly serviceRepository: Repository<Service>,
    ) {}

    create(createServiceDto: CreateServiceDto): Promise<Service> {
        return this.serviceRepository.save(createServiceDto);
    }

    async findAll(): Promise<Service[]> {
        return this.serviceRepository.find();
    }

    findOne(id: number): Promise<Service> {
        return this.serviceRepository.findOneBy({ id: id });
    }

    update(id: number, updateServiceDto: UpdateServiceDto): Promise<any> {
        return this.serviceRepository.update(id, updateServiceDto);
    }

    remove(id: number): Promise<any> {
        return this.serviceRepository.delete(id);
    }
}
