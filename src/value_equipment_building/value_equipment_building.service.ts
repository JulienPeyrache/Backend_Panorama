import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateValueEquipmentBuildingDto } from "./dto/create-value_equipment_building.dto";
import { UpdateValueEquipmentBuildingDto } from "./dto/update-value_equipment_building.dto";
import { ValueEquipmentBuilding } from "./entities/value_equipment_building.entity";

@Injectable()
export class ValueEquipmentBuildingService {
	constructor(
		@InjectRepository(ValueEquipmentBuilding)
		private readonly valueEquipmentBuildingRepository: Repository<ValueEquipmentBuilding>
	) {}

	async create(
		createValueEquipmentBuildingDto: CreateValueEquipmentBuildingDto
	): Promise<ValueEquipmentBuilding> {
		return this.valueEquipmentBuildingRepository.save(
			createValueEquipmentBuildingDto
		);
	}

	async findAll(): Promise<ValueEquipmentBuilding[]> {
		return this.valueEquipmentBuildingRepository.find();
	}

	async findOne(id: number): Promise<ValueEquipmentBuilding> {
		return this.valueEquipmentBuildingRepository.findOneBy({ id: id });
	}

	async update(
		id: number,
		updateValueEquipmentBuildingDto: UpdateValueEquipmentBuildingDto
	): Promise<UpdateResult> {
		return this.valueEquipmentBuildingRepository.update(
			id,
			updateValueEquipmentBuildingDto
		);
	}

	async remove(id: number): Promise<DeleteResult> {
		return this.valueEquipmentBuildingRepository.delete(id);
	}

	async findByBuildingId(
		buildingId: number
	): Promise<ValueEquipmentBuilding[]> {
		return this.valueEquipmentBuildingRepository.find({
			where: { buildingId: buildingId },
			order: { equipmentId: "ASC" },
		});
	}
}
