import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult, In } from "typeorm";
import { CreateValueItemSiteDto } from "./dto/create-value_item_site.dto";
import { UpdateValueItemSiteDto } from "./dto/update-value_item_site.dto";
import { ValueItemSite } from "./entities/value_item_site.entity";
import { Site } from "src/site/entities/site.entity";

@Injectable()
export class ValueItemSiteService {
	constructor(
		@InjectRepository(ValueItemSite)
		private readonly valueItemSiteRepository: Repository<ValueItemSite>
	) {}

	async create(
		createValueItemSiteDto: CreateValueItemSiteDto
	): Promise<ValueItemSite> {
		return this.valueItemSiteRepository.save(createValueItemSiteDto);
	}

	async findAll(): Promise<ValueItemSite[]> {
		return this.valueItemSiteRepository.find();
	}

	async findOne(id: number): Promise<ValueItemSite> {
		return this.valueItemSiteRepository.findOneBy({ id: id });
	}

	async findBySiteId(siteId: number): Promise<ValueItemSite[]> {
		return this.valueItemSiteRepository.find({
			where: { siteId: siteId },
		});
	}

	async update(
		id: number,
		updateValueItemSiteDto: UpdateValueItemSiteDto
	): Promise<UpdateResult> {
		return this.valueItemSiteRepository.update(id, updateValueItemSiteDto);
	}

	async remove(id: number): Promise<DeleteResult> {
		return this.valueItemSiteRepository.delete(id);
	}

  async findByItemId(
    itemId: number
  ): Promise<ValueItemSite[]> {
    return this.valueItemSiteRepository.find({
      where: { itemId: itemId },
      order: { id: "ASC" },
    })
  }
}
