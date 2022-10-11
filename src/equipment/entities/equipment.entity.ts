import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ValueEquipmentBuilding } from "../../value_equipment_building/entities/value_equipment_building.entity";

@Entity()
export class Equipment {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	label_equipment: string;

	@OneToMany(
		() => ValueEquipmentBuilding,
		(valuesEquipmentBuilding) => valuesEquipmentBuilding.equipment
	)
	valuesEquipmentBuilding: ValueEquipmentBuilding[];
}
