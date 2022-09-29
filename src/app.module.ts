import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from './course/course.module';
import { ServiceModule } from './service/service.module';
import { AttachedServiceModule } from './attached_service/attached_service.module';
import { GlossaryModule } from './glossary/glossary.module';
import ormConfigOptions from './database/typeormoptions.config';

@Module({
    imports: [
        TypeOrmModule.forRoot(ormConfigOptions),
        CourseModule,
        ServiceModule,
        AttachedServiceModule,
        GlossaryModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
