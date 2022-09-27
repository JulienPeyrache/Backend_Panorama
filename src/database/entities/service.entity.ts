import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Glossary } from './glossary.entity';
import { Course } from './course.entity';

@Entity()
export class Service {
<<<<<<< HEAD
    @PrimaryGeneratedColumn("uuid")
    id_service: number;
=======
    @PrimaryGeneratedColumn()
    id: number;
>>>>>>> a4d99ec (create some first entities)

    @Column()
    code_service: string;

    @Column()
<<<<<<< HEAD
    label: string;

    @Column()
    course: string;
=======
    label_service: string;

    @ManyToOne(() => Course, (course) => course.services)
    course: Course;

    @OneToMany(() => Glossary, (glossary) => glossary.service)
    definitions: Glossary[];
>>>>>>> a4d99ec (create some first entities)
}
