import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateBuildingDto } from "./dto/create-building.dto";
import { UpdateBuildingDto } from "./dto/update-building.dto";
import { Building } from "./entities/building.entity";

@Injectable()
export class BuildingService {
  constructor(
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>
  ) {}

  async create(createBuildingDto: CreateBuildingDto): Promise<Building> {
    return this.buildingRepository.save(createBuildingDto);
  }

  async findAll(): Promise<Building[]> {
    return this.buildingRepository.find();
  }

  async findOne(id: number): Promise<Building> {
    return this.buildingRepository.findOneBy({ id: id });
  }

  async findByName(name: string): Promise<Building> {
    return this.buildingRepository.findOneBy({ name_building: name });
  }

  async update(
    id: number,
    updateBuildingDto: UpdateBuildingDto
  ): Promise<UpdateResult> {
    return this.buildingRepository.update(id, updateBuildingDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.buildingRepository.delete(id);
  }
}
