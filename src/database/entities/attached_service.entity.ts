import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AttachedService {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    label_attached_service: string;
}
