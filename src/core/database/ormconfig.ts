/* eslint-disable @typescript-eslint/no-var-requires */
import { DataSource } from "typeorm";
require("dotenv-flow").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [
    __dirname + "/../../**/**/*.entity{.ts,.js}",
    // "dist/**/**/*.entity.js"
  ],
  migrations: [
    __dirname + "/migrations/*{.ts,.js}",
    // "dist/src/core/database/migrations/*{.ts,.js}",
  ],
  synchronize: false, //Essa propriedade não deve ser utilizada em produção! Caso contrário os dados poderão ser perdidos.
  migrationsRun: false,
  migrationsTableName: "history",
});
