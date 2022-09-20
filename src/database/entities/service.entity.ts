import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Service {
    @PrimaryGeneratedColumn()
    id_service: number;

    @Column()
    acronym: string;

    @Column()
    name: string;
}
