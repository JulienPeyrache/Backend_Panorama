import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from './service.entity';

@Entity()
export class Glossary {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    keyword: string;

    @Column()
    definition: string;

    @ManyToOne(() => Service, (service) => service.definitions)
    service: Service;
}
