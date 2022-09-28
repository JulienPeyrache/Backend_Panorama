import { DataSourceOptions } from 'typeorm';

const ormConfigOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'panorama',
    password: 'panorama',
    database: 'panorama-db',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: false, // shouldn't be true in production
    migrations: [__dirname + '/**/migrations/*{.ts,.js}'],
};

export default ormConfigOptions;
