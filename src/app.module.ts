import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from './course/course.module';
import ormConfigOptions from './database/typeormoptions.config';

@Module({
    imports: [TypeOrmModule.forRoot(ormConfigOptions), CourseModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
