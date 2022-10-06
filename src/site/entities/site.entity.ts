import {
	Column,
	Entity,
	PrimaryColumn,
	OneToMany,
	ManyToOne,
	ManyToMany,
	JoinTable,
} from "typeorm";
import { ValueEquipmentSite } from "../../value_equipment_site/entities/value_equipment_site.entity";
import { ValueItemSite } from "../../value_item_site/entities/value_item_site.entity";
import { Building } from "../../building/entities/building.entity";
import { AttachedService } from "../../attached_service/entities/attached_service.entity";

export enum TypologySite {
	ARCHIVES = "ARCHIVES",
	CRC_PRO = "CRC PRO",
	CRC_COM = "CRC COM",
	CRC_SIN = "CRC SIN",
	CRD_MACIF_DIRECT = "CRD MACIF DIRECT",
	ESPACE_RESTAURATION = "Espace Restauration",
	IRD = "IRD",
	PAP = "PAP",
	RE = "RE",
	SGD = "SGD",
	SUPPORT = "SUPPORT",
	TERTIAIRE = "Tertiaire",
}

export enum Immo {
	AMM = "AMM",
	CNP = "CNP",
	FE = "FE",
	NORD_EST = "Nord Est",
	OUEST = "Ouest",
	SUD_EST = "Sud Est",
}

export enum ETOrganisation {
	AMM = "AMM",
	DIET_CNP = "DIET CNP",
	FE = "FE",
	NORD_EST = "Nord Est",
	OUEST = "Ouest",
	SUD_EST = "Sud Est",
}

@Entity()
export class Site {
	@PrimaryColumn()
	id: number;

	@Column({ type: "enum", enum: TypologySite })
	typology_site: TypologySite;

	@Column({ type: "enum", enum: Immo })
	immo: Immo;

	@Column({ type: "enum", enum: ETOrganisation })
	ET_organisation: ETOrganisation;

	@Column()
	is_courrier: boolean;

	@Column()
	comments: string;

	@Column()
	buildingId: number;

	@OneToMany(
		() => ValueEquipmentSite,
		(valuesEquipmentSite) => valuesEquipmentSite.site
	)
	valuesEquipmentSite: ValueEquipmentSite[];

	@OneToMany(() => ValueItemSite, (valuesItemSite) => valuesItemSite.site)
	valuesItemSite: ValueItemSite[];

	@ManyToOne(() => Building, (building) => building.sites)
	building: Building;

	@ManyToMany(
		() => AttachedService,
		(attachedServices) => attachedServices.sites
	)
	@JoinTable()
	attachedServices: AttachedService[];
}
