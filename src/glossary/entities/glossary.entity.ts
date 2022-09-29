import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from '../../service/entities/service.entity';

@Entity()
export class Glossary {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    keyword: string;

    @Column()
    definition: string;

    @Column()
    serviceId: number;

    @ManyToOne(() => Service, (service) => service.definitions)
    service: Service;
}
