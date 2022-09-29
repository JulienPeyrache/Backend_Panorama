import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateGlossaryDto } from './dto/create-glossary.dto';
import { UpdateGlossaryDto } from './dto/update-glossary.dto';
import { Glossary } from './entities/glossary.entity';

@Injectable()
export class GlossaryService {
    constructor(
        @InjectRepository(Glossary)
        private readonly glossaryRepository: Repository<Glossary>,
    ) {}

    async create(createGlossaryDto: CreateGlossaryDto): Promise<Glossary> {
        return this.glossaryRepository.save(createGlossaryDto);
    }

    async findAll(): Promise<Glossary[]> {
        return this.glossaryRepository.find();
    }

    async findOne(id: number): Promise<Glossary> {
        return this.glossaryRepository.findOneBy({ id: id });
    }

    async update(
        id: number,
        updateGlossaryDto: UpdateGlossaryDto,
    ): Promise<UpdateResult> {
        return this.glossaryRepository.update(id, updateGlossaryDto);
    }

    async remove(id: number): Promise<DeleteResult> {
        return this.glossaryRepository.delete(id);
    }
}
