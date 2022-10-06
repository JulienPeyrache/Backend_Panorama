import { MigrationInterface, QueryRunner } from "typeorm";

export class initDB1664464558777 implements MigrationInterface {
  name = "initDB1664464558777";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`glossary\` (\`id\` int NOT NULL AUTO_INCREMENT, \`keyword\` varchar(255) NOT NULL, \`definition\` varchar(255) NOT NULL, \`serviceId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`building\` (\`id\` int NOT NULL, \`name_building\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`postal_code\` int NOT NULL, \`city\` varchar(255) NOT NULL, \`typology_building\` enum ('Mixte', 'PAP', 'Technique', 'Tertiaire') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`value_equipment_building\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, \`buildingId\` int NOT NULL, \`equipmentId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`equipment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`label_equipment\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`value_equipment_site\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, \`siteId\` int NOT NULL, \`equipmentId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`site\` (\`id\` int NOT NULL, \`typology_site\` enum ('ARCHIVES', 'CRC PRO', 'CRC COM', 'CRC SIN', 'CRD MACIF DIRECT', 'Espace Restauration', 'IRD', 'PAP', 'RE', 'SGD', 'SUPPORT', 'Tertiaire') NOT NULL, \`immo\` enum ('AMM', 'CNP', 'FE', 'Nord Est', 'Ouest', 'Sud Est') NOT NULL, \`ET_organisation\` enum ('AMM', 'DIET CNP', 'FE', 'Nord Est', 'Ouest', 'Sud Est') NOT NULL, \`is_courrier\` tinyint NOT NULL, \`comments\` varchar(255) NOT NULL, \`buildingId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`value_item_site\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, \`siteId\` int NOT NULL, \`itemId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`item\` (\`id\` int NOT NULL AUTO_INCREMENT, \`label_item\` varchar(255) NOT NULL, \`default_value\` varchar(255) NULL, \`is_occupant_info\` tinyint NOT NULL, \`attachedServiceId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`attached_service\` (\`id\` int NOT NULL AUTO_INCREMENT, \`label_attached_service\` varchar(255) NOT NULL, \`serviceId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`service\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code_service\` varchar(255) NOT NULL, \`label_service\` varchar(255) NOT NULL, \`courseId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`course\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code_course\` varchar(255) NOT NULL, \`label_course\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`site_attached_services_attached_service\` (\`siteId\` int NOT NULL, \`attachedServiceId\` int NOT NULL, INDEX \`IDX_1103944c16818e4cd347afa6fd\` (\`siteId\`), INDEX \`IDX_f1b3c589b5a4f0df74f6442791\` (\`attachedServiceId\`), PRIMARY KEY (\`siteId\`, \`attachedServiceId\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `ALTER TABLE \`glossary\` ADD CONSTRAINT \`FK_f77acf210d7c02a91b0f7bff087\` FOREIGN KEY (\`serviceId\`) REFERENCES \`service\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`value_equipment_building\` ADD CONSTRAINT \`FK_8e4734ff66a71a59a41a366b968\` FOREIGN KEY (\`buildingId\`) REFERENCES \`building\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`value_equipment_building\` ADD CONSTRAINT \`FK_34613603da928107d5ec03d5cbe\` FOREIGN KEY (\`equipmentId\`) REFERENCES \`equipment\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`value_equipment_site\` ADD CONSTRAINT \`FK_bc1531853a170bd42612f02cf2b\` FOREIGN KEY (\`siteId\`) REFERENCES \`site\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`value_equipment_site\` ADD CONSTRAINT \`FK_54770adac7c4acb211c30e3a383\` FOREIGN KEY (\`equipmentId\`) REFERENCES \`equipment\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`site\` ADD CONSTRAINT \`FK_e8b0068fcbdf073c97077ae1a84\` FOREIGN KEY (\`buildingId\`) REFERENCES \`building\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`value_item_site\` ADD CONSTRAINT \`FK_4ec6f0e2ac93ddadd14adcaa565\` FOREIGN KEY (\`siteId\`) REFERENCES \`site\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`value_item_site\` ADD CONSTRAINT \`FK_149ec46136eb677d9e5db588f23\` FOREIGN KEY (\`itemId\`) REFERENCES \`item\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`item\` ADD CONSTRAINT \`FK_6e7101a03138287970d371d16b6\` FOREIGN KEY (\`attachedServiceId\`) REFERENCES \`attached_service\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`attached_service\` ADD CONSTRAINT \`FK_98a25e2666e0d99f84e82316921\` FOREIGN KEY (\`serviceId\`) REFERENCES \`service\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`service\` ADD CONSTRAINT \`FK_bd43729518f25a1f1a08be5d966\` FOREIGN KEY (\`courseId\`) REFERENCES \`course\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`site_attached_services_attached_service\` ADD CONSTRAINT \`FK_1103944c16818e4cd347afa6fd9\` FOREIGN KEY (\`siteId\`) REFERENCES \`site\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE \`site_attached_services_attached_service\` ADD CONSTRAINT \`FK_f1b3c589b5a4f0df74f6442791b\` FOREIGN KEY (\`attachedServiceId\`) REFERENCES \`attached_service\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`site_attached_services_attached_service\` DROP FOREIGN KEY \`FK_f1b3c589b5a4f0df74f6442791b\``
    );
    await queryRunner.query(
      `ALTER TABLE \`site_attached_services_attached_service\` DROP FOREIGN KEY \`FK_1103944c16818e4cd347afa6fd9\``
    );
    await queryRunner.query(
      `ALTER TABLE \`service\` DROP FOREIGN KEY \`FK_bd43729518f25a1f1a08be5d966\``
    );
    await queryRunner.query(
      `ALTER TABLE \`attached_service\` DROP FOREIGN KEY \`FK_98a25e2666e0d99f84e82316921\``
    );
    await queryRunner.query(
      `ALTER TABLE \`item\` DROP FOREIGN KEY \`FK_6e7101a03138287970d371d16b6\``
    );
    await queryRunner.query(
      `ALTER TABLE \`value_item_site\` DROP FOREIGN KEY \`FK_149ec46136eb677d9e5db588f23\``
    );
    await queryRunner.query(
      `ALTER TABLE \`value_item_site\` DROP FOREIGN KEY \`FK_4ec6f0e2ac93ddadd14adcaa565\``
    );
    await queryRunner.query(
      `ALTER TABLE \`site\` DROP FOREIGN KEY \`FK_e8b0068fcbdf073c97077ae1a84\``
    );
    await queryRunner.query(
      `ALTER TABLE \`value_equipment_site\` DROP FOREIGN KEY \`FK_54770adac7c4acb211c30e3a383\``
    );
    await queryRunner.query(
      `ALTER TABLE \`value_equipment_site\` DROP FOREIGN KEY \`FK_bc1531853a170bd42612f02cf2b\``
    );
    await queryRunner.query(
      `ALTER TABLE \`value_equipment_building\` DROP FOREIGN KEY \`FK_34613603da928107d5ec03d5cbe\``
    );
    await queryRunner.query(
      `ALTER TABLE \`value_equipment_building\` DROP FOREIGN KEY \`FK_8e4734ff66a71a59a41a366b968\``
    );
    await queryRunner.query(
      `ALTER TABLE \`glossary\` DROP FOREIGN KEY \`FK_f77acf210d7c02a91b0f7bff087\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_f1b3c589b5a4f0df74f6442791\` ON \`site_attached_services_attached_service\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_1103944c16818e4cd347afa6fd\` ON \`site_attached_services_attached_service\``
    );
    await queryRunner.query(
      `DROP TABLE \`site_attached_services_attached_service\``
    );
    await queryRunner.query(`DROP TABLE \`course\``);
    await queryRunner.query(`DROP TABLE \`service\``);
    await queryRunner.query(`DROP TABLE \`attached_service\``);
    await queryRunner.query(`DROP TABLE \`item\``);
    await queryRunner.query(`DROP TABLE \`value_item_site\``);
    await queryRunner.query(`DROP TABLE \`site\``);
    await queryRunner.query(`DROP TABLE \`value_equipment_site\``);
    await queryRunner.query(`DROP TABLE \`equipment\``);
    await queryRunner.query(`DROP TABLE \`value_equipment_building\``);
    await queryRunner.query(`DROP TABLE \`building\``);
    await queryRunner.query(`DROP TABLE \`glossary\``);
  }
}
