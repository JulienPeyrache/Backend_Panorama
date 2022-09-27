import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1663773087760 implements MigrationInterface {
    name = 'Init1663773087760'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`building\` (\`id_building\` int NOT NULL, \`address\` varchar(255) NOT NULL, \`postal_code\` int NOT NULL, \`typology_building\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, PRIMARY KEY (\`id_building\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`category_service\` (\`id_category\` int NOT NULL AUTO_INCREMENT, \`id_service\` int NOT NULL, \`item\` varchar(255) NOT NULL, PRIMARY KEY (\`id_category\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`equipment\` (\`id_equipment\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id_equipment\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`info_site\` (\`id_value\` int NOT NULL AUTO_INCREMENT, \`id_site\` int NOT NULL, \`id_info\` int NOT NULL, \`id_info_responsible\` int NOT NULL, \`value\` varchar(255) NOT NULL, PRIMARY KEY (\`id_value\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`equipment_site\` (\`id_value\` int NOT NULL AUTO_INCREMENT, \`id_site\` int NOT NULL, \`id_equipment\` int NOT NULL, \`value\` varchar(255) NOT NULL, \`id_info_responsible\` int NOT NULL, PRIMARY KEY (\`id_value\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`info\` (\`id_info\` int NOT NULL AUTO_INCREMENT, \`id_category\` int NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id_info\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`service\` (\`id_service\` int NOT NULL AUTO_INCREMENT, \`acronym\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id_service\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`site\` (\`id_site\` int NOT NULL, \`id_building\` int NOT NULL, \`typology_site\` varchar(255) NOT NULL, \`immo\` varchar(255) NOT NULL, \`ET_organisation\` varchar(255) NOT NULL, \`id_site_responsible\` int NOT NULL, \`id_collecter\` int NOT NULL, \`comments\` varchar(255) NOT NULL, PRIMARY KEY (\`id_site\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id_user\` int NOT NULL AUTO_INCREMENT, \`role\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`first_name\` varchar(255) NOT NULL, PRIMARY KEY (\`id_user\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`site_category\` (\`id_site_category\` int NOT NULL AUTO_INCREMENT, \`id_site\` int NOT NULL, \`id_category\` int NOT NULL, \`is_included\` tinyint NOT NULL, PRIMARY KEY (\`id_site_category\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`site_category\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`site\``);
        await queryRunner.query(`DROP TABLE \`service\``);
        await queryRunner.query(`DROP TABLE \`info\``);
        await queryRunner.query(`DROP TABLE \`equipment_site\``);
        await queryRunner.query(`DROP TABLE \`info_site\``);
        await queryRunner.query(`DROP TABLE \`equipment\``);
        await queryRunner.query(`DROP TABLE \`category_service\``);
        await queryRunner.query(`DROP TABLE \`building\``);
    }

}
