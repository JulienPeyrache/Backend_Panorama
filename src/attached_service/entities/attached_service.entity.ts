import {
	Column,
	Entity,
	ManyToMany,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Service } from "../../service/entities/service.entity";
import { Item } from "../../item/entities/item.entity";
import { Building } from "../../building/entities/building.entity";

@Entity()
export class AttachedService {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	label_attached_service: string;

	@Column()
	serviceId: number;

	@ManyToOne(() => Service, (service) => service.attachedServices)
	service: Service;

	@OneToMany(() => Item, (item) => item.attachedService)
	items: Item[];

	@ManyToMany(() => Building, (buildings) => buildings.attachedServices)
	buildings: Building[];
}
