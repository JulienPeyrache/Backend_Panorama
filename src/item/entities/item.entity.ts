import { Step } from "../../database/enum";
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

	@Column({ unique: true })
	label_item: string;

	@Column({ unique: true, nullable: true })
	label_userfriendly: string;

	@Column()
	is_occupant_info: boolean;

	@Column({ type: "enum", enum: Step, nullable: true })
	step: Step;

	@Column()
	attachedServiceId: number;

	@ManyToOne(
		() => AttachedService,
		(attachedService) => attachedService.items,
		{ onDelete: "CASCADE" }
	)
	attachedService: AttachedService;

	@OneToMany(
		() => ValueItemBuilding,
		(valuesItemBuilding) => valuesItemBuilding.item,
		{ cascade: true }
	)
	valuesItemBuilding: ValueItemBuilding[];
}
