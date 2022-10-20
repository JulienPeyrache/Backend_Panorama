import { Step } from "../../database/enum";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ValueEquipmentBuilding } from "../../value_equipment_building/entities/value_equipment_building.entity";

@Entity()
export class Equipment {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	label_equipment: string;

	@Column({ type: "enum", enum: Step, nullable: true })
	step: Step;

	@OneToMany(
		() => ValueEquipmentBuilding,
		(valuesEquipmentBuilding) => valuesEquipmentBuilding.equipment,
		{ cascade: true }
	)
	valuesEquipmentBuilding: ValueEquipmentBuilding[];
}
