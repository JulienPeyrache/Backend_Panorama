import { Service } from "src/service/entities/service.entity";

export class CreateAttachedServiceDto {
  label_attached_service: string;
  service: Service;
}
