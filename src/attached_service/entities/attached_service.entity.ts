import {
	Column,
	Entity,
	JoinTable,
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

	@Column({ unique: true })
	label_attached_service: string;

	@Column()
	serviceId: number;

	@ManyToOne(() => Service, (service) => service.attachedServices, {
		onDelete: "CASCADE",
	})
	service: Service;

	@OneToMany(() => Item, (item) => item.attachedService, { cascade: true })
	items: Item[];

	@ManyToMany(() => Building, (buildings) => buildings.attachedServices)
	@JoinTable({ name: "attached_services_buildings" })
	buildings: Building[];
}
