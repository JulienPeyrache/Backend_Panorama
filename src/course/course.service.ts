import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Course } from './entities/course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>,
    ) {}

    async create(createCourseDto: CreateCourseDto): Promise<Course> {
        return this.courseRepository.save(createCourseDto);
    }

    async findAll(): Promise<Course[]> {
        return this.courseRepository.find();
    }

    async findOne(id: number): Promise<Course> {
        return this.courseRepository.findOneBy({ id: id });
    }

    async update(
        id: number,
        updateCourseDto: UpdateCourseDto,
    ): Promise<UpdateResult> {
        return this.courseRepository.update(id, updateCourseDto);
    }

    async remove(id: number): Promise<DeleteResult> {
        return this.courseRepository.delete(id);
    }
}
