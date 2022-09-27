import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attached_Service {
    @PrimaryGeneratedColumn("uuid")
    id_category: number;

    @Column()
    id_service: number;

    @Column()
    label: string;
}
