import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Service {
    @PrimaryGeneratedColumn("uuid")
    id_service: number;

    @Column()
    acronym: string;

    @Column()
    label: string;

    @Column()
    course: string;
}
