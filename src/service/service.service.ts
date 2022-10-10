import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Service } from "./entities/service.entity";
import { CreateServiceDto } from "./dto/create-service.dto";
import { UpdateServiceDto } from "./dto/update-service.dto";

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>
  ) {}

  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    return this.serviceRepository.save(createServiceDto);
  }

  async findAll(): Promise<Service[]> {
    return this.serviceRepository.find();
  }

  async findOne(id: number): Promise<Service> {
    return this.serviceRepository.findOneBy({ id: id });
  }

  async update(
    id: number,
    updateServiceDto: UpdateServiceDto
  ): Promise<UpdateResult> {
    return this.serviceRepository.update(id, updateServiceDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.serviceRepository.delete(id);
  }

  async findByCourseId(
    courseId: number): Promise<Service[]>{
      return this.serviceRepository.find({
        where: { courseId: courseId },
        order: { id: "ASC" },
      });
    }
}
