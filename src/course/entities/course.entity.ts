import { Entity, OneToMany, PrimaryGeneratedColumn, Column } from "typeorm";
import { Service } from "../../service/entities/service.entity";

@Entity()
export class Course {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	code_course: string;

	@Column({ unique: true })
	label_course: string;

	@Column()
	description: string;

	@OneToMany(() => Service, (service) => service.course, { cascade: true })
	services: Service[];
}
