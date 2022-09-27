import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ValueEquipmentSite {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    description: string;
}
