import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Site } from 'src/site/entities/site.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateAttachedServiceDto } from './dto/create-attached_service.dto';
import { UpdateAttachedServiceDto } from './dto/update-attached_service.dto';
import { AttachedService } from './entities/attached_service.entity';

@Injectable()
export class AttachedServiceService {
    constructor(
        @InjectRepository(AttachedService)
        private readonly attachedServiceRepository: Repository<AttachedService>,
        @InjectRepository(Site)
        private readonly siteRepository: Repository<Site>,
    ) {}

    async create(
        createAttachedServiceDto: CreateAttachedServiceDto,
    ): Promise<AttachedService> {
        return this.attachedServiceRepository.save(createAttachedServiceDto);
    }

    async findAll(): Promise<AttachedService[]> {
        return this.attachedServiceRepository.find({ relations: ['sites'] });
    }

    async findOne(id: number): Promise<AttachedService> {
        return this.attachedServiceRepository.findOne({
            where: {
                id: id,
            },
            relations: ['sites'],
        });
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

    async isOnSite(attachedServiceId: number, siteId: number): Promise<Site> {
        const attachedService = await this.attachedServiceRepository.findOne({
            where: {
                id: attachedServiceId,
            },
            relations: ['sites'],
        });
        for (const site of attachedService.sites) {
            if (site.id === siteId) {
                return site;
            }
        }
        throw new NotFoundException();
    }

    async addToSite(
        attachedServiceId: number,
        siteId: number,
    ): Promise<AttachedService> {
        const attachedService = await this.attachedServiceRepository.findOneBy({
            id: attachedServiceId,
        });
        const site = await this.siteRepository.findOneBy({ id: siteId });
        if (attachedService.sites === undefined) {
            attachedService.sites = [site];
        } else {
            attachedService.sites.push(site);
        }
        return this.attachedServiceRepository.save(attachedService);
    }

    async removeFromSite(
        attachedServiceId: number,
        siteId: number,
    ): Promise<AttachedService> {
        const attachedService = await this.attachedServiceRepository.findOne({
            where: {
                id: attachedServiceId,
            },
            relations: ['sites'],
        });
        attachedService.sites = attachedService.sites.filter(
            (site) => site.id !== siteId,
        );
        return this.attachedServiceRepository.save(attachedService);
    }
}
