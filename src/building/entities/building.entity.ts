import { Column, Entity, PrimaryColumn, OneToMany, ManyToMany } from "typeorm";
import { ValueEquipmentBuilding } from "../../value_equipment_building/entities/value_equipment_building.entity";
import { ValueItemBuilding } from "../../value_item_building/entities/value_item_building.entity";
import { AttachedService } from "../../attached_service/entities/attached_service.entity";
import { TypologyBuilding } from "../../database/enum";

@Entity()
export class Building {
	@PrimaryColumn()
	id: number;

	@Column({ unique: true })
	name_building: string;

	@Column()
	address: string;

	@Column()
	postal_code: number;

	@Column()
	city: string;

	@Column({ type: "enum", enum: TypologyBuilding })
	typology_building: TypologyBuilding;

	@Column()
	is_courrier: boolean;

	@OneToMany(
		() => ValueEquipmentBuilding,
		(valuesEquipmentBuilding) => valuesEquipmentBuilding.building,
		{ cascade: true }
	)
	valuesEquipmentBuilding: ValueEquipmentBuilding[];

	@OneToMany(
		() => ValueItemBuilding,
		(valuesItemBuilding) => valuesItemBuilding.building,
		{ cascade: true }
	)
	valuesItemBuilding: ValueItemBuilding[];

	@ManyToMany(
		() => AttachedService,
		(attachedServices) => attachedServices.buildings
	)
	attachedServices: AttachedService[];
}
