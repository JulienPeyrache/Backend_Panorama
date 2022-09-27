import { Entity, OneToMany, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Service } from './service.entity';

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code_course: string;

    @Column()
    label_course: string;

    @Column()
    description: string;

    @OneToMany(() => Service, (service) => service.course)
    services: Service[];
}