import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Glossary } from '../../database/entities/glossary.entity';
import { Course } from '../../course/entities/course.entity';
import { AttachedService } from '../../attached_service/entities/attached_service.entity';

@Entity()
export class Service {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code_service: string;

    @Column()
    label_service: string;

    @Column()
    courseId: number;

    @ManyToOne(() => Course, (course) => course.services)
    course: Course;

    @OneToMany(() => Glossary, (glossary) => glossary.service)
    definitions: Glossary[];

    @OneToMany(
        () => AttachedService,
        (attachedService) => attachedService.service,
    )
    attachedServices: AttachedService[];
}
