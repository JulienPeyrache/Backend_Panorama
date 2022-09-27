import { Column, Entity, PrimaryColumn, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { ValueEquipmentSite } from './value_equipment_site.entity';
import { ValueItemSite } from './value_item_site.entity';
import { Building } from './building.entity';
import { AttachedService } from './attached_service.entity';

@Entity()
export class Site {
    @PrimaryColumn()
    id: number;

    @Column()
    typology_site: string;

    @Column()
    immo: string;

    @Column()
    ET_organisation: string;

    @Column()
    is_courrier: boolean;

    @Column()
    comments: string;

    @OneToMany(
        () => ValueEquipmentSite,
        (valuesEquipmentSite) => valuesEquipmentSite.site,
    )
    valuesEquipmentSite: ValueEquipmentSite[];

    @OneToMany(() => ValueItemSite, (valuesItemSite) => valuesItemSite.site)
    valuesItemSite: ValueItemSite[];

    @ManyToOne(() => Building, (building) => building.sites)
    building: Building;

    @ManyToMany(() => AttachedService, (attachedServices) => attachedServices.sites)
    @JoinTable()
    attachedServices: AttachedService[];
}
