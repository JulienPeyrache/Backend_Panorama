import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { AttachedService } from '../../attached_service/entities/attached_service.entity';
import { ValueItemSite } from '../../database/entities/value_item_site.entity';

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label_item: string;

    @Column({ nullable: true })
    default_value: string;

    @Column()
    is_occupant_info: boolean;

    @Column()
    attachedServiceId: number;

    @ManyToOne(
        () => AttachedService,
        (attachedService) => attachedService.items,
    )
    attachedService: AttachedService;

    @OneToMany(() => ValueItemSite, (valuesItemSite) => valuesItemSite.item)
    valuesItemSite: ValueItemSite[];
}