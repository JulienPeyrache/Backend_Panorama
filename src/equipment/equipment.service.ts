import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateEquipmentDto } from "./dto/create-equipment.dto";
import { UpdateEquipmentDto } from "./dto/update-equipment.dto";
import { Equipment } from "./entities/equipment.entity";

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(Equipment)
    private readonly equipmentRepository: Repository<Equipment>
  ) {}

  async create(createEquipmentDto: CreateEquipmentDto): Promise<Equipment> {
    return this.equipmentRepository.save(createEquipmentDto);
  }

  async findAll(): Promise<Equipment[]> {
    return this.equipmentRepository.find();
  }

  async findOne(id: number): Promise<Equipment> {
    return this.equipmentRepository.findOneBy({ id: id });
  }

  async update(
    id: number,
    updateEquipmentDto: UpdateEquipmentDto
  ): Promise<UpdateResult> {
    return this.equipmentRepository.update(id, updateEquipmentDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.equipmentRepository.delete(id);
  }
}
