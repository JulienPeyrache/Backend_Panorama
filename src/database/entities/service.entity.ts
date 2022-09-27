import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Glossary } from './glossary.entity';
import { Course } from './course.entity';
import { AttachedService } from './attached_service.entity';

@Entity()
export class Service {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    code_service: string;

    @Column()
    label_service: string;

    @ManyToOne(() => Course, (course) => course.services)
    course: Course;

    @OneToMany(() => Glossary, (glossary) => glossary.service)
    definitions: Glossary[];

    @OneToMany(() => AttachedService, (attachedService) => attachedService.service)
    attachedServices: AttachedService[];
}
