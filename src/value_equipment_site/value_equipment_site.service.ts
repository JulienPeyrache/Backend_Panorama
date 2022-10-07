import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateValueEquipmentSiteDto } from "./dto/create-value_equipment_site.dto";
import { UpdateValueEquipmentSiteDto } from "./dto/update-value_equipment_site.dto";
import { ValueEquipmentSite } from "./entities/value_equipment_site.entity";

@Injectable()
export class ValueEquipmentSiteService {
	constructor(
		@InjectRepository(ValueEquipmentSite)
		private readonly valueEquipmentSiteRepository: Repository<ValueEquipmentSite>
	) {}

	async create(
		createValueEquipmentSiteDto: CreateValueEquipmentSiteDto
	): Promise<ValueEquipmentSite> {
		return this.valueEquipmentSiteRepository.save(createValueEquipmentSiteDto);
	}

	async findAll(): Promise<ValueEquipmentSite[]> {
		return this.valueEquipmentSiteRepository.find();
	}

	async findOne(id: number): Promise<ValueEquipmentSite> {
		return this.valueEquipmentSiteRepository.findOneBy({ id: id });
	}

	async update(
		id: number,
		updateValueEquipmentSiteDto: UpdateValueEquipmentSiteDto
	): Promise<UpdateResult> {
		return this.valueEquipmentSiteRepository.update(
			id,
			updateValueEquipmentSiteDto
		);
	}

	async remove(id: number): Promise<DeleteResult> {
		return this.valueEquipmentSiteRepository.delete(id);
	}

	async findBySiteId(siteId: number): Promise<ValueEquipmentSite[]> {
		return this.valueEquipmentSiteRepository.find({
			where: { siteId: siteId },
			order: { equipmentId: "ASC" },
		});
	}
}
