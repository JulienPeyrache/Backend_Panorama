import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Course } from "../../course/entities/course.entity";
import { AttachedService } from "../../attached_service/entities/attached_service.entity";

@Entity()
export class Service {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	code_service: string;

	@Column({ unique: true })
	label_service: string;

	@Column()
	courseId: number;

	@ManyToOne(() => Course, (course) => course.services, { onDelete: "CASCADE" })
	course: Course;

	@OneToMany(
		() => AttachedService,
		(attachedService) => attachedService.service,
		{ cascade: true }
	)
	attachedServices: AttachedService[];
}
