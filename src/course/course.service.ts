import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>,
    ) {}

    create(createCourseDto: CreateCourseDto): Promise<Course> {
        return this.courseRepository.save(createCourseDto);
    }

    async findAll(): Promise<Course[]> {
        return this.courseRepository.find();
    }

    findOne(id: number): Promise<Course> {
        return this.courseRepository.findOneBy({ id: id });
    }

    update(id: number, updateCourseDto: UpdateCourseDto): Promise<any> {
        return this.courseRepository.update(id, updateCourseDto);
    }

    remove(id: number): Promise<any> {
        return this.courseRepository.delete(id);
    }
}
