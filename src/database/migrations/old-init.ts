import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1663773087760 implements MigrationInterface {
    name = 'Init1663773087760'

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
