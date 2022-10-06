import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateItemDto } from "./dto/create-item.dto";
import { UpdateItemDto } from "./dto/update-item.dto";
import { Item } from "./entities/item.entity";

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>
  ) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    return this.itemRepository.save(createItemDto);
  }

  async findAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async findOne(id: number): Promise<Item> {
    return this.itemRepository.findOneBy({ id: id });
  }

  async update(
    id: number,
    updateItemDto: UpdateItemDto
  ): Promise<UpdateResult> {
    return this.itemRepository.update(id, updateItemDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.itemRepository.delete(id);
  }
}
