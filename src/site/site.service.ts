import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateSiteDto } from "./dto/create-site.dto";
import { UpdateSiteDto } from "./dto/update-site.dto";
import { Site } from "./entities/site.entity";

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(Site)
    private readonly siteRepository: Repository<Site>
  ) {}

  async create(createSiteDto: CreateSiteDto): Promise<Site> {
    return this.siteRepository.save(createSiteDto);
  }

  async findAll(): Promise<Site[]> {
    return this.siteRepository.find();
  }

  async findOne(id: number): Promise<Site> {
    return this.siteRepository.findOneBy({ id: id });
  }

  async update(
    id: number,
    updateSiteDto: UpdateSiteDto
  ): Promise<UpdateResult> {
    return this.siteRepository.update(id, updateSiteDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.siteRepository.delete(id);
  }
}
