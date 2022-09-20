import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'panorama',
      password: 'panorama',
      database: 'panorama-db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // shouldn't be used in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
