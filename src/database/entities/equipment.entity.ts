import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Equipment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label_equipment: string;
}
