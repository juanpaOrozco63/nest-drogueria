import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { DataSource } from 'typeorm';
@Injectable()
export class SeedService {
    constructor(private readonly dataSource: DataSource) {}

    async executeSeed(): Promise<string> {
      const filePath = path.join(__dirname, '../../../database/query.sql'); // Ruta al archivo SQL
      const sql = fs.readFileSync(filePath, 'utf8'); // Leer el archivo SQL
  
      const queryRunner = this.dataSource.createQueryRunner();
      await queryRunner.connect();
  
      try {
        await queryRunner.startTransaction();
        await queryRunner.query(sql); // Ejecutar las consultas SQL
        await queryRunner.commitTransaction();
        return 'Seed ejecutado correctamente';
      } catch (error) {
        await queryRunner.rollbackTransaction();
        throw new Error(`Error ejecutando el seed: ${error.message}`);
      } finally {
        await queryRunner.release();
      }
    }

}
