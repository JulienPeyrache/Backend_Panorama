import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	OneToMany,
} from "typeorm";
import { AttachedService } from "../../attached_service/entities/attached_service.entity";
import { ValueItemBuilding } from "../../value_item_building/entities/value_item_building.entity";

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

	@ManyToOne(() => AttachedService, (attachedService) => attachedService.items)
	attachedService: AttachedService;

	@OneToMany(
		() => ValueItemBuilding,
		(valuesItemBuilding) => valuesItemBuilding.item
	)
	valuesItemBuilding: ValueItemBuilding[];
}
