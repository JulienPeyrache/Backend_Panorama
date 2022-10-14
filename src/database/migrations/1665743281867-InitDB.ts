import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDB1665743281867 implements MigrationInterface {
    name = 'InitDB1665743281867'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`course\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code_course\` varchar(255) NOT NULL, \`label_course\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_998ac7bf0bf96929019ad6a85c\` (\`code_course\`), UNIQUE INDEX \`IDX_beec4a00aae5aa6b067f962931\` (\`label_course\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`service\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code_service\` varchar(255) NOT NULL, \`label_service\` varchar(255) NOT NULL, \`courseId\` int NOT NULL, UNIQUE INDEX \`IDX_f1c27bce13650cc6b661bf254f\` (\`code_service\`), UNIQUE INDEX \`IDX_47c1bd8c6b3e84d0eb3fe5ff20\` (\`label_service\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`equipment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`label_equipment\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_2a7d19dbcce929765f569f4cc9\` (\`label_equipment\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`value_equipment_building\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, \`buildingId\` int NOT NULL, \`equipmentId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`building\` (\`id\` int NOT NULL, \`name_building\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`postal_code\` int NOT NULL, \`city\` varchar(255) NOT NULL, \`typology_building\` enum ('Mixte', 'PAP', 'Technique', 'Tertiaire') NOT NULL, \`is_courrier\` tinyint NOT NULL, UNIQUE INDEX \`IDX_84eeeead63bfc84341d9f75832\` (\`name_building\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`value_item_building\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, \`buildingId\` int NOT NULL, \`itemId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`item\` (\`id\` int NOT NULL AUTO_INCREMENT, \`label_item\` varchar(255) NOT NULL, \`is_occupant_info\` tinyint NOT NULL, \`attachedServiceId\` int NOT NULL, UNIQUE INDEX \`IDX_4102efa7bd9cd1f890d1e7f54e\` (\`label_item\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`attached_service\` (\`id\` int NOT NULL AUTO_INCREMENT, \`label_attached_service\` varchar(255) NOT NULL, \`serviceId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`attached_services_buildings\` (\`attachedServiceId\` int NOT NULL, \`buildingId\` int NOT NULL, INDEX \`IDX_37323e02d6612c026f79ebe15f\` (\`attachedServiceId\`), INDEX \`IDX_0fd2a8fbee68907d6758b9770b\` (\`buildingId\`), PRIMARY KEY (\`attachedServiceId\`, \`buildingId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`service\` ADD CONSTRAINT \`FK_bd43729518f25a1f1a08be5d966\` FOREIGN KEY (\`courseId\`) REFERENCES \`course\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`value_equipment_building\` ADD CONSTRAINT \`FK_8e4734ff66a71a59a41a366b968\` FOREIGN KEY (\`buildingId\`) REFERENCES \`building\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`value_equipment_building\` ADD CONSTRAINT \`FK_34613603da928107d5ec03d5cbe\` FOREIGN KEY (\`equipmentId\`) REFERENCES \`equipment\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`value_item_building\` ADD CONSTRAINT \`FK_f4551f81176d68e1085a33ff79a\` FOREIGN KEY (\`buildingId\`) REFERENCES \`building\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`value_item_building\` ADD CONSTRAINT \`FK_039954b7042106492113765ab5c\` FOREIGN KEY (\`itemId\`) REFERENCES \`item\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`item\` ADD CONSTRAINT \`FK_6e7101a03138287970d371d16b6\` FOREIGN KEY (\`attachedServiceId\`) REFERENCES \`attached_service\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`attached_service\` ADD CONSTRAINT \`FK_98a25e2666e0d99f84e82316921\` FOREIGN KEY (\`serviceId\`) REFERENCES \`service\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`attached_services_buildings\` ADD CONSTRAINT \`FK_37323e02d6612c026f79ebe15f1\` FOREIGN KEY (\`attachedServiceId\`) REFERENCES \`attached_service\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`attached_services_buildings\` ADD CONSTRAINT \`FK_0fd2a8fbee68907d6758b9770b7\` FOREIGN KEY (\`buildingId\`) REFERENCES \`building\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`attached_services_buildings\` DROP FOREIGN KEY \`FK_0fd2a8fbee68907d6758b9770b7\``);
        await queryRunner.query(`ALTER TABLE \`attached_services_buildings\` DROP FOREIGN KEY \`FK_37323e02d6612c026f79ebe15f1\``);
        await queryRunner.query(`ALTER TABLE \`attached_service\` DROP FOREIGN KEY \`FK_98a25e2666e0d99f84e82316921\``);
        await queryRunner.query(`ALTER TABLE \`item\` DROP FOREIGN KEY \`FK_6e7101a03138287970d371d16b6\``);
        await queryRunner.query(`ALTER TABLE \`value_item_building\` DROP FOREIGN KEY \`FK_039954b7042106492113765ab5c\``);
        await queryRunner.query(`ALTER TABLE \`value_item_building\` DROP FOREIGN KEY \`FK_f4551f81176d68e1085a33ff79a\``);
        await queryRunner.query(`ALTER TABLE \`value_equipment_building\` DROP FOREIGN KEY \`FK_34613603da928107d5ec03d5cbe\``);
        await queryRunner.query(`ALTER TABLE \`value_equipment_building\` DROP FOREIGN KEY \`FK_8e4734ff66a71a59a41a366b968\``);
        await queryRunner.query(`ALTER TABLE \`service\` DROP FOREIGN KEY \`FK_bd43729518f25a1f1a08be5d966\``);
        await queryRunner.query(`DROP INDEX \`IDX_0fd2a8fbee68907d6758b9770b\` ON \`attached_services_buildings\``);
        await queryRunner.query(`DROP INDEX \`IDX_37323e02d6612c026f79ebe15f\` ON \`attached_services_buildings\``);
        await queryRunner.query(`DROP TABLE \`attached_services_buildings\``);
        await queryRunner.query(`DROP TABLE \`attached_service\``);
        await queryRunner.query(`DROP INDEX \`IDX_4102efa7bd9cd1f890d1e7f54e\` ON \`item\``);
        await queryRunner.query(`DROP TABLE \`item\``);
        await queryRunner.query(`DROP TABLE \`value_item_building\``);
        await queryRunner.query(`DROP INDEX \`IDX_84eeeead63bfc84341d9f75832\` ON \`building\``);
        await queryRunner.query(`DROP TABLE \`building\``);
        await queryRunner.query(`DROP TABLE \`value_equipment_building\``);
        await queryRunner.query(`DROP INDEX \`IDX_2a7d19dbcce929765f569f4cc9\` ON \`equipment\``);
        await queryRunner.query(`DROP TABLE \`equipment\``);
        await queryRunner.query(`DROP INDEX \`IDX_47c1bd8c6b3e84d0eb3fe5ff20\` ON \`service\``);
        await queryRunner.query(`DROP INDEX \`IDX_f1c27bce13650cc6b661bf254f\` ON \`service\``);
        await queryRunner.query(`DROP TABLE \`service\``);
        await queryRunner.query(`DROP INDEX \`IDX_beec4a00aae5aa6b067f962931\` ON \`course\``);
        await queryRunner.query(`DROP INDEX \`IDX_998ac7bf0bf96929019ad6a85c\` ON \`course\``);
        await queryRunner.query(`DROP TABLE \`course\``);
    }

}
