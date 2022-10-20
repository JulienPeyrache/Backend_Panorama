import { Step } from "../../database/enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Redirection {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "enum", enum: Step, nullable: true })
	step: Step;

	@Column()
	label: string;

	@Column()
	url: string;
}
