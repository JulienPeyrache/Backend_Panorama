import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Equipment } from "../../equipment/entities/equipment.entity";
import { Building } from "../../building/entities/building.entity";

@Entity()
export class ValueEquipmentBuilding {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	description: string;

	@Column()
	buildingId: number;

	@Column()
	equipmentId: number;

	@ManyToOne(() => Building, (building) => building.valuesEquipmentBuilding, {
		onDelete: "CASCADE",
	})
	building: Building;

	@ManyToOne(
		() => Equipment,
		(equipment) => equipment.valuesEquipmentBuilding,
		{ onDelete: "CASCADE" }
	)
	equipment: Equipment;
}
