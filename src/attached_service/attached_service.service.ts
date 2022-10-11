import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Building } from "src/building/entities/building.entity";
import { DeleteResult, Not, Repository, UpdateResult } from "typeorm";
import { CreateAttachedServiceDto } from "./dto/create-attached_service.dto";
import { UpdateAttachedServiceDto } from "./dto/update-attached_service.dto";
import { AttachedService } from "./entities/attached_service.entity";

@Injectable()
export class AttachedServiceService {
	constructor(
		@InjectRepository(AttachedService)
		private readonly attachedServiceRepository: Repository<AttachedService>,
		@InjectRepository(Building)
		private readonly buildingRepository: Repository<Building>
	) {}

	async create(
		createAttachedServiceDto: CreateAttachedServiceDto
	): Promise<AttachedService> {
		return this.attachedServiceRepository.save(createAttachedServiceDto);
	}

	async findAll(): Promise<AttachedService[]> {
		return this.attachedServiceRepository.find({ relations: ["buildings"] });
	}

	async findOne(id: number): Promise<AttachedService> {
		return this.attachedServiceRepository.findOne({
			where: {
				id: id,
			},
			relations: ["buildings"],
		});
	}

	async findByServiceId(serviceId: number): Promise<AttachedService[]> {
		return this.attachedServiceRepository.find({
			where: {
				serviceId: serviceId,
				label_attached_service: Not("Commun"),
			},
		});
	}

	async findByServiceAndLabel(
		serviceId: number,
		label: string
	): Promise<AttachedService> {
		return this.attachedServiceRepository.findOne({
			where: {
				serviceId: serviceId,
				label_attached_service: label,
			},
		});
	}

	async update(
		id: number,
		updateAttachedServiceDto: UpdateAttachedServiceDto
	): Promise<UpdateResult> {
		return this.attachedServiceRepository.update(id, updateAttachedServiceDto);
	}

	async remove(id: number): Promise<DeleteResult> {
		return this.attachedServiceRepository.delete(id);
	}

	async isOnBuilding(
		attachedServiceId: number,
		buildingId: number
	): Promise<Building> {
		const attachedService = await this.attachedServiceRepository.findOne({
			where: {
				id: attachedServiceId,
			},
			relations: ["buildings"],
		});
		for (const building of attachedService.buildings) {
			if (building.id === buildingId) {
				return building;
			}
		}
		return null;
	}

	async addToBuilding(
		attachedServiceId: number,
		buildingId: number
	): Promise<AttachedService> {
		const attachedService = await this.attachedServiceRepository.findOneBy({
			id: attachedServiceId,
		});
		const building = await this.buildingRepository.findOneBy({
			id: buildingId,
		});
		if (attachedService.buildings === undefined) {
			attachedService.buildings = [building];
		} else {
			attachedService.buildings.push(building);
		}
		return this.attachedServiceRepository.save(attachedService);
	}

	async removeFromBuilding(
		attachedServiceId: number,
		buildingId: number
	): Promise<AttachedService> {
		const attachedService = await this.attachedServiceRepository.findOne({
			where: {
				id: attachedServiceId,
			},
			relations: ["buildings"],
		});
		attachedService.buildings = attachedService.buildings.filter(
			(building) => building.id !== buildingId
		);
		return this.attachedServiceRepository.save(attachedService);
	}

	async findByServiceIdUser(serviceId: number): Promise<AttachedService[]> {
		return this.attachedServiceRepository.find({
			where: { serviceId: serviceId },
			order: { id: "ASC" },
		});
	}
}
