import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateDBForUserInterface1666280489190 implements MigrationInterface {
    name = 'UpdateDBForUserInterface1666280489190'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`redirection\` (\`id\` int NOT NULL AUTO_INCREMENT, \`step\` enum ('Restaurant d''entreprise', 'Offre en libre service', 'Se détendre', 'Services à la personne', 'Hygiène', 'Se déplacer', 'Organiser une réunion', 'Organiser un événement', 'Accueillir des visiteurs', 'Equipements du bâtiment', 'Réception et expédition de courrier', 'Reprographie', 'Archivage', 'Déménager et aménager', 'Guichet de support ET', 'Guichet de support IT', 'Entretien des extérieurs', 'Sécurité et sûreté') NULL, \`label\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`equipment\` ADD \`step\` enum ('Restaurant d''entreprise', 'Offre en libre service', 'Se détendre', 'Services à la personne', 'Hygiène', 'Se déplacer', 'Organiser une réunion', 'Organiser un événement', 'Accueillir des visiteurs', 'Equipements du bâtiment', 'Réception et expédition de courrier', 'Reprographie', 'Archivage', 'Déménager et aménager', 'Guichet de support ET', 'Guichet de support IT', 'Entretien des extérieurs', 'Sécurité et sûreté') NULL`);
        await queryRunner.query(`ALTER TABLE \`item\` ADD \`label_userfriendly\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`item\` ADD UNIQUE INDEX \`IDX_647c30389eea10137a7ce364ba\` (\`label_userfriendly\`)`);
        await queryRunner.query(`ALTER TABLE \`item\` ADD \`step\` enum ('Restaurant d''entreprise', 'Offre en libre service', 'Se détendre', 'Services à la personne', 'Hygiène', 'Se déplacer', 'Organiser une réunion', 'Organiser un événement', 'Accueillir des visiteurs', 'Equipements du bâtiment', 'Réception et expédition de courrier', 'Reprographie', 'Archivage', 'Déménager et aménager', 'Guichet de support ET', 'Guichet de support IT', 'Entretien des extérieurs', 'Sécurité et sûreté') NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`step\``);
        await queryRunner.query(`ALTER TABLE \`item\` DROP INDEX \`IDX_647c30389eea10137a7ce364ba\``);
        await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`label_userfriendly\``);
        await queryRunner.query(`ALTER TABLE \`equipment\` DROP COLUMN \`step\``);
        await queryRunner.query(`DROP TABLE \`redirection\``);
    }

}
