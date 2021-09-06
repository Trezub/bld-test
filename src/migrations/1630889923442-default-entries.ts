import {MigrationInterface, QueryRunner} from "typeorm";

export class defaultEntries1630889923442 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "drivers" ("id", "name", "cep") VALUES (1, 'Motorista 1', '80010-180'), (2, 'Motorista 2', '99999-999')`);
        await queryRunner.query(`INSERT INTO "vehicles" ("id", "plate", "driverId") VALUES (1, 'ABC-1234', 1), (2, 'ZZZ-0000', 1)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "vehicles" WHERE id = 1 OR id = 2`);
        await queryRunner.query(`DELETE FROM "drivers" WHERE id = 1 OR id = 2`);
    }

}
