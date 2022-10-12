import { DataSourceOptions } from "typeorm";

const ormConfigOptions: DataSourceOptions = {
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: 3306,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  synchronize: false, // shouldn't be true in production
  migrations: [__dirname + "/**/migrations/*{.ts,.js}"],
};

export default ormConfigOptions;