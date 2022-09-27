import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Item {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    label_item: string;

    @Column({ nullable: true })
    default_value: string;

    @Column()
    is_occupant_info: boolean;
}