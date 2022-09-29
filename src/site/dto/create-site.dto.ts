import { Building } from 'src/building/entities/building.entity';
import { ETOrganisation, Immo, TypologySite } from '../entities/site.entity';

export class CreateSiteDto {
    id: number;
    typology_site: TypologySite;
    immo: Immo;
    ET_organisation: ETOrganisation;
    is_courrier: boolean;
    comments: string;
    building: Building;
}
