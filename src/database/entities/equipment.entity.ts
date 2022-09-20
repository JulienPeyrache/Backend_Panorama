import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Equipment {
    @PrimaryGeneratedColumn()
    id_equipment: number;

    @Column()
    name: string;
}
