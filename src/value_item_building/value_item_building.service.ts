import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult, In } from "typeorm";
import { CreateValueItemBuildingDto } from "./dto/create-value_item_building.dto";
import { UpdateValueItemBuildingDto } from "./dto/update-value_item_building.dto";
import { ValueItemBuilding } from "./entities/value_item_building.entity";
import { Building } from "src/building/entities/building.entity";

@Injectable()
export class ValueItemBuildingService {
	constructor(
		@InjectRepository(ValueItemBuilding)
		private readonly valueItemBuildingRepository: Repository<ValueItemBuilding>
	) {}

	async create(
		createValueItemBuildingDto: CreateValueItemBuildingDto
	): Promise<ValueItemBuilding> {
		return this.valueItemBuildingRepository.save(createValueItemBuildingDto);
	}

	async findAll(): Promise<ValueItemBuilding[]> {
		return this.valueItemBuildingRepository.find();
	}

	async findOne(id: number): Promise<ValueItemBuilding> {
		return this.valueItemBuildingRepository.findOneBy({ id: id });
	}

	async findByBuildingId(buildingId: number): Promise<ValueItemBuilding[]> {
		return this.valueItemBuildingRepository.find({
			where: { buildingId: buildingId },
		});
	}

	async update(
		id: number,
		updateValueItemBuildingDto: UpdateValueItemBuildingDto
	): Promise<UpdateResult> {
		return this.valueItemBuildingRepository.update(
			id,
			updateValueItemBuildingDto
		);
	}

	async remove(id: number): Promise<DeleteResult> {
		return this.valueItemBuildingRepository.delete(id);
	}

	async findByItemAndBuildingId(
		itemId: number,
		buildingId: number
	): Promise<ValueItemBuilding> {
		return this.valueItemBuildingRepository.findOneBy({
			itemId: itemId,
			buildingId: buildingId,
		});
	}
}
