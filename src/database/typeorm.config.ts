import { DataSource } from 'typeorm';

const ormConfig = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'panorama',
    password: 'panorama',
    database: 'panorama-db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // shouldn't be used in production
    migrations: ['src/database/migrations/*{.ts,.js}'],
});

export default ormConfig;
