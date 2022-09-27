import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from './service.entity';
import { Item } from './item.entity';
import { Site } from './site.entity';

@Entity()
export class AttachedService {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    label_attached_service: string;

    @ManyToOne(() => Service, (service) => service.attachedServices)
    service: Service;

    @OneToMany(() => Item, (item) => item.attachedService)
    items: Item[];

    @ManyToMany(() => Site, (sites) => sites.attachedServices)
    sites: Site[];
}
