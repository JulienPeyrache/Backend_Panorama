import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Step } from "../database/enum";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateRedirectionDto } from "./dto/create-redirection.dto";
import { UpdateRedirectionDto } from "./dto/update-redirection.dto";
import { Redirection } from "./entities/redirection.entity";

@Injectable()
export class RedirectionService {
	constructor(
		@InjectRepository(Redirection)
		private readonly redirectionRepository: Repository<Redirection>
	) {}

	async create(
		createRedirectionDto: CreateRedirectionDto
	): Promise<Redirection> {
		return this.redirectionRepository.save(createRedirectionDto);
	}

	async findAll(): Promise<Redirection[]> {
		return this.redirectionRepository.find();
	}

	async findOne(id: number): Promise<Redirection> {
		return this.redirectionRepository.findOneBy({ id: id });
	}

	async findByStep(step: Step): Promise<Redirection[]> {
		return this.redirectionRepository.find({
			where: { step: step },
			order: { id: "ASC" },
		});
	}

	async update(
		id: number,
		updateRedirectionDto: UpdateRedirectionDto
	): Promise<UpdateResult> {
		return this.redirectionRepository.update(id, updateRedirectionDto);
	}

	async remove(id: number): Promise<DeleteResult> {
		return this.redirectionRepository.delete(id);
	}
}
