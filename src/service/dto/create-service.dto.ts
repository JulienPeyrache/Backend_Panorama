import { Course } from "src/course/entities/course.entity";

export class CreateServiceDto {
  code_service: string;
  label_service: string;
  course: Course;
}
