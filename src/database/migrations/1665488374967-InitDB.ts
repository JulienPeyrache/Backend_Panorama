import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDB1665488374967 implements MigrationInterface {
    name = 'InitDB1665488374967'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`equipment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`label_equipment\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`value_equipment_building\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, \`buildingId\` int NOT NULL, \`equipmentId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`course\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code_course\` varchar(255) NOT NULL, \`label_course\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`service\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code_service\` varchar(255) NOT NULL, \`label_service\` varchar(255) NOT NULL, \`courseId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`attached_service\` (\`id\` int NOT NULL AUTO_INCREMENT, \`label_attached_service\` varchar(255) NOT NULL, \`serviceId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`item\` (\`id\` int NOT NULL AUTO_INCREMENT, \`label_item\` varchar(255) NOT NULL, \`default_value\` varchar(255) NULL, \`is_occupant_info\` tinyint NOT NULL, \`attachedServiceId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`value_item_building\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, \`buildingId\` int NOT NULL, \`itemId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`building\` (\`id\` int NOT NULL, \`name_building\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`postal_code\` int NOT NULL, \`city\` varchar(255) NOT NULL, \`typology_building\` enum ('Mixte', 'PAP', 'Technique', 'Tertiaire') NOT NULL, \`is_courrier\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`building_attached_services_attached_service\` (\`buildingId\` int NOT NULL, \`attachedServiceId\` int NOT NULL, INDEX \`IDX_0716ecec02ac5f81bfa163fdf3\` (\`buildingId\`), INDEX \`IDX_fef6f87d372d61f9037f0fe9f4\` (\`attachedServiceId\`), PRIMARY KEY (\`buildingId\`, \`attachedServiceId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`value_equipment_building\` ADD CONSTRAINT \`FK_8e4734ff66a71a59a41a366b968\` FOREIGN KEY (\`buildingId\`) REFERENCES \`building\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`value_equipment_building\` ADD CONSTRAINT \`FK_34613603da928107d5ec03d5cbe\` FOREIGN KEY (\`equipmentId\`) REFERENCES \`equipment\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`service\` ADD CONSTRAINT \`FK_bd43729518f25a1f1a08be5d966\` FOREIGN KEY (\`courseId\`) REFERENCES \`course\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`attached_service\` ADD CONSTRAINT \`FK_98a25e2666e0d99f84e82316921\` FOREIGN KEY (\`serviceId\`) REFERENCES \`service\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`item\` ADD CONSTRAINT \`FK_6e7101a03138287970d371d16b6\` FOREIGN KEY (\`attachedServiceId\`) REFERENCES \`attached_service\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`value_item_building\` ADD CONSTRAINT \`FK_f4551f81176d68e1085a33ff79a\` FOREIGN KEY (\`buildingId\`) REFERENCES \`building\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`value_item_building\` ADD CONSTRAINT \`FK_039954b7042106492113765ab5c\` FOREIGN KEY (\`itemId\`) REFERENCES \`item\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`building_attached_services_attached_service\` ADD CONSTRAINT \`FK_0716ecec02ac5f81bfa163fdf38\` FOREIGN KEY (\`buildingId\`) REFERENCES \`building\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`building_attached_services_attached_service\` ADD CONSTRAINT \`FK_fef6f87d372d61f9037f0fe9f40\` FOREIGN KEY (\`attachedServiceId\`) REFERENCES \`attached_service\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`building_attached_services_attached_service\` DROP FOREIGN KEY \`FK_fef6f87d372d61f9037f0fe9f40\``);
        await queryRunner.query(`ALTER TABLE \`building_attached_services_attached_service\` DROP FOREIGN KEY \`FK_0716ecec02ac5f81bfa163fdf38\``);
        await queryRunner.query(`ALTER TABLE \`value_item_building\` DROP FOREIGN KEY \`FK_039954b7042106492113765ab5c\``);
        await queryRunner.query(`ALTER TABLE \`value_item_building\` DROP FOREIGN KEY \`FK_f4551f81176d68e1085a33ff79a\``);
        await queryRunner.query(`ALTER TABLE \`item\` DROP FOREIGN KEY \`FK_6e7101a03138287970d371d16b6\``);
        await queryRunner.query(`ALTER TABLE \`attached_service\` DROP FOREIGN KEY \`FK_98a25e2666e0d99f84e82316921\``);
        await queryRunner.query(`ALTER TABLE \`service\` DROP FOREIGN KEY \`FK_bd43729518f25a1f1a08be5d966\``);
        await queryRunner.query(`ALTER TABLE \`value_equipment_building\` DROP FOREIGN KEY \`FK_34613603da928107d5ec03d5cbe\``);
        await queryRunner.query(`ALTER TABLE \`value_equipment_building\` DROP FOREIGN KEY \`FK_8e4734ff66a71a59a41a366b968\``);
        await queryRunner.query(`DROP INDEX \`IDX_fef6f87d372d61f9037f0fe9f4\` ON \`building_attached_services_attached_service\``);
        await queryRunner.query(`DROP INDEX \`IDX_0716ecec02ac5f81bfa163fdf3\` ON \`building_attached_services_attached_service\``);
        await queryRunner.query(`DROP TABLE \`building_attached_services_attached_service\``);
        await queryRunner.query(`DROP TABLE \`building\``);
        await queryRunner.query(`DROP TABLE \`value_item_building\``);
        await queryRunner.query(`DROP TABLE \`item\``);
        await queryRunner.query(`DROP TABLE \`attached_service\``);
        await queryRunner.query(`DROP TABLE \`service\``);
        await queryRunner.query(`DROP TABLE \`course\``);
        await queryRunner.query(`DROP TABLE \`value_equipment_building\``);
        await queryRunner.query(`DROP TABLE \`equipment\``);
    }

}
